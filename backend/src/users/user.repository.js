import prisma from "../db/index.js";

export const findUsers = async () => {
    const users = await prisma.user.findMany();
    return users;
}

export const findUserByUsername = async (username) => {
    const user = await prisma.user.findUnique({
        where: {
            username
        }
    });
    return user;
}

export const findUserByToken = async (token) => {
    const user = await prisma.user.findFirst({
        where: {
            token
        }
    });
    return user;
}

export const editUser = async (username, data) => {
    const user = await prisma.user.update({
        where: {
            username
        },
        data
    });
    return user;
}