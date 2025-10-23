import { PrismaClient } from '@prisma/client';

export const prisma = new PrismaClient();

prisma.user.create({
    data: {
        email: 'alice@example.com',
        password: 'password',
        firstName: 'Alice',
        lastName: 'way',
    },
});