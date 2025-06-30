import { PrismaClient } from '../../prisma/generated';
import { customAlphabet } from 'nanoid';

const prisma = new PrismaClient();
const nanoid = customAlphabet('ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789', 6);

export async function generateUniqueShareCode(): Promise<string> {
  let code = '';
  let exists = true;

  while (exists) {
    code = nanoid();

    exists = await prisma.user.findUnique({
      where: { shareCode: code }
    }) !== null;
  }
  return code;
}