import express from "express"
import { getUserByUsername, editUserByUsername } from "./user.service.js"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import { v4 as uuid } from "uuid"
import { requireLogin, validateData } from "../middleware/middleware.js";
import { pengaturanSchema, userLoginSchema } from "./user.validation.js";
const user_router = express.Router();

user_router.post("/login", validateData(userLoginSchema), async (req, res) => {
    try {
        let user;
        const userLogin = req.body;

        if (!userLogin.username || !userLogin.password) {
            return res.status(400).json({
                status: 400,
                message: "username and password are required"
            });
        }

        const isUsernameExist = await getUserByUsername(userLogin.username);

        if (!isUsernameExist) {
            return res.status(400).json({
                status: 400,
                message: "Username or Password is invalid"
            });
        }

        const isPasswordCorrect = await bcrypt.compare(userLogin.password, isUsernameExist.password);

        if (!isPasswordCorrect) {
            return res.status(400).json({
                status: 400,
                message: "Username or Password is invalid"
            });
        }

        if (!isUsernameExist.token) {
            user = await editUserByUsername(userLogin.username, { token: uuid() });
        } else {
            user = isUsernameExist
        }

        const accessToken = jwt.sign({ username: user.username }, process.env.JWT_ACCESS_TOKEN_SECRET, { expiresIn: process.env.JWT_ACCESS_TOKEN_EXPIRES_IN });
        const refreshToken = jwt.sign({ token: user.token }, process.env.JWT_REFRESH_TOKEN_SECRET, { expiresIn: process.env.JWT_REFRESH_TOKEN_EXPIRES_IN });

        res.cookie("refreshToken", refreshToken, {
            httpOnly: true,
            maxAge: 48 * 60 * 60 * 1000,
            secure: true,
            sameSite: "strict"
        });
        return res.status(200).json({
            status: 200,
            message: "Login success",
            data: {
                username: user.username,
                token: accessToken,
                name: user.name
            }
        });
    } catch (error) {
        return res.status(500).json({
            status: 500,
            message: error.message
        });
    }
});

user_router.get("/", requireLogin, async (req, res) => {
    try {
        const { username, accessToken } = req.body;
        const user = await getUserByUsername(username);
        if (accessToken) {
            return res.status(200).json({
                status: 200,
                message: "Get user success",
                data: {
                    username: user.username,
                    name: user.name,
                    token: accessToken
                }
            })
        }
        return res.status(200).json({
            status: 200,
            message: "Get user success",
            data: {
                username: user.username,
                name: user.name,
            }
        });
    } catch (error) {
        return res.status(500).json({
            status: 500,
            message: error.message
        });
    }
})

user_router.delete("/", requireLogin, async (req, res) => {
    try {
        const { username } = req.body;
        await editUserByUsername(username, { token: null });
        return res.status(200).json({
            status: 200,
            message: "Logout success",
        });
    } catch (error) {
        return res.status(500).json({
            status: 500,
            message: error.message
        });
    }
});

user_router.patch("/", requireLogin, validateData(pengaturanSchema), async (req, res) => {
    try {
        const { username, passwordBaru, passwordLama, accessToken } = req.body;

        const isUsernameExist = await getUserByUsername(username);
        if (!isUsernameExist) {
            return res.status(400).json({
                status: 400,
                message: "Username not found"
            });
        }
        const isPasswordCorrect = await bcrypt.compare(passwordLama, isUsernameExist.password);
        if (!isPasswordCorrect) {
            if (accessToken) {
                return res.status(401).json({
                    status: 401,
                    message: "Kata sandi lama tidak sesuai",
                    token: accessToken,
                });
            }
            return res.status(401).json({
                status: 401,
                message: "Kata sandi lama tidak sesuai"
            });
        }
        const hashedPassword = await bcrypt.hashSync(passwordBaru, 10);
        await editUserByUsername(username, { password: hashedPassword });
        if (accessToken) {
            return res.status(200).json({
                status: 200,
                message: "Kata sandi berhasil diubah",
                token: accessToken,
            });
        }
        return res.status(200).json({
            status: 200,
            message: "Kata sandi berhasil diubah",
        });
    } catch (error) {
        return res.status(500).json({
            status: 500,
            message: error.message
        });
    }
});

export default user_router