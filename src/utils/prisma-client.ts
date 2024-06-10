import { PrismaClient } from '@prisma/client';

const prismaClientSingleton = () => {
  return new PrismaClient();
};

declare global {
  var prisma: undefined | ReturnType<typeof prismaClientSingleton>;
}

const isProduction = process.env.NODE_ENV === 'production';

export const prisma = globalThis.prisma || prismaClientSingleton();

if (!isProduction) globalThis.prisma = prisma;

export default async function connectDatabase() {
  try {
    await prisma.$connect();
    console.log('🚀 Database connection established');
  } catch (error) {
    const err =
      error instanceof Error && (isProduction ? error.message : error.stack);
    console.log('Could not connect to the database:', err);
  } finally {
    await prisma.$disconnect();
    console.log('Database connection closed');
  }
}