/*
  Warnings:

  - You are about to drop the column `code` on the `Couple` table. All the data in the column will be lost.
  - Added the required column `coupleName` to the `Couple` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "Couple_code_key";

-- AlterTable
ALTER TABLE "Couple" DROP COLUMN "code",
ADD COLUMN     "coupleName" TEXT NOT NULL;
