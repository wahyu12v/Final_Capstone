import { getUserByToken } from "../users/user.service.js";
import { ZodError } from "zod";

export const requireLogin = async (req, res, next) => {
    if (!req.headers.authorization) {
        return res.status(401).json({
            status: 401,
            message: "Unauthorized action"
        });
    }

    const user = await getUserByToken(req.headers.authorization);

    if (!user) {
        return res.status(401).json({
            status: 401,
            message: "Unauthorized action"
        });
    }

    req.body.username = user.username;
    next();
}

export function validateData(schema) {
    return (req, res, next) => {
        try {
            const data = schema.parse(req.body);
            req.body = data;
            next();
        } catch (error) {
            if (error instanceof ZodError) {
                res.status(400).json({
                    status: 400,
                    message: error.issues
                });
            }
        }
    }
}