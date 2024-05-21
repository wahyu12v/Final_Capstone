import express from "express"
import { getUserByUsername, editUserByUsername } from "./user.service.js"
import bcrypt from "bcrypt"
import { v4 as uuid } from "uuid"
import { requireLogin, validateData } from "../middleware/middleware.js";
import { userLoginSchema } from "./user.validation.js";

const user_router = express.Router();

user_router.post("/login", validateData(userLoginSchema), async (req, res) => {
    try {
        const userLogin = req.body;

        if (!userLogin.username || !userLogin.password) {
            return res.status(400).json({
                status: 400,
                message: "username and password are required"
            });
        }

        const isUsernameExist = await getUserByUsername(userLogin.username);

        if (!isUsernameExist) {
            return res.status(401).json({
                status: 401,
                message: "Username or Password is invalid"
            });
        }

        const isPasswordCorrect = await bcrypt.compare(userLogin.password, isUsernameExist.password);

        if (!isPasswordCorrect) {
            return res.status(401).json({
                status: 401,
                message: "Username or Password is invalid"
            });
        }

        const user = await editUserByUsername(userLogin.username, { token: uuid() });

        return res.status(200).json({
            status: 200,
            message: "Login success",
            data: {
                username: user.username,
                token: user.token,
                name: user.name
            }
        });
    } catch (error) {
        return res.status(401).json({
            status: 401,
            message: error.message
        });
    }
});

user_router.get("/", requireLogin, async (req, res) => {
    try {
        const { username } = req.body;
        const user = await getUserByUsername(username);
        return res.status(200).json({
            status: 200,
            message: "Get user success",
            data: {
                username: user.username,
                name: user.name
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


export default user_router