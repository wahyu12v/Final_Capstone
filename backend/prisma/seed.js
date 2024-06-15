import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';

const prisma = new PrismaClient();

async function main() {

    const saltRounds = 10;
    const password = 'admin123';
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    const user = await prisma.user.upsert({
        where: { username: 'admin_pantas' },
        update: {},
        create: {
            username: 'admin_pantas',
            password: hashedPassword,
            name: 'Admin Pantas',
            email: 'admin@pantas.cloud',
            number: '08123456789'
        },
    });

    console.log({ user });
}

main()
    .then(async () => {
        await prisma.$disconnect();
    })
    .catch(async (e) => {
        console.error(e);
        await prisma.$disconnect();
        process.exit(1);
    });