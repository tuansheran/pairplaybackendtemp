/*
  Warnings:

  - The primary key for the `SavedDateIdea` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `coupleId` on the `SavedDateIdea` table. All the data in the column will be lost.
  - You are about to drop the column `savedAt` on the `SavedDateIdea` table. All the data in the column will be lost.
  - The `id` column on the `SavedDateIdea` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - A unique constraint covering the columns `[userId,dateIdeaId]` on the table `SavedDateIdea` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `userId` to the `SavedDateIdea` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "SavedDateIdea" DROP CONSTRAINT "SavedDateIdea_coupleId_fkey";

-- AlterTable
ALTER TABLE "SavedDateIdea" DROP CONSTRAINT "SavedDateIdea_pkey",
DROP COLUMN "coupleId",
DROP COLUMN "savedAt",
ADD COLUMN     "userId" TEXT NOT NULL,
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "SavedDateIdea_pkey" PRIMARY KEY ("id");

-- CreateIndex
CREATE UNIQUE INDEX "SavedDateIdea_userId_dateIdeaId_key" ON "SavedDateIdea"("userId", "dateIdeaId");

-- AddForeignKey
ALTER TABLE "SavedDateIdea" ADD CONSTRAINT "SavedDateIdea_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
