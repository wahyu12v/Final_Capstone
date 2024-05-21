import { findUserByUsername, editUser, findUsers, findUserByToken } from "./user.repository.js"

export const getAllUsers = async () => {
    const users = await findUsers();
    return users;
}

export const getUserByUsername = async (username) => {
    const user = await findUserByUsername(username);

    return user;
}

export const editUserByUsername = async (username, data) => {
    const user = await editUser(username, data);

    return user;
}

export const getUserByToken = async (token) => {
    const user = await findUserByToken(token);
    return user;
}
