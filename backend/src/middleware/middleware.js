import { getUserByToken } from "../users/user.service.js";
import { ZodError } from "zod";
import path from "path";
import jwt from "jsonwebtoken";

export const requireLogin = async (req, res, next) => {
    if (!req.headers.authorization) {
        return res.status(401).json({
            status: 401,
            message: "Unauthorized action"
        });
    }

    if (!req.headers.authorization.startsWith("Bearer ")) {
        return res.status(401).json({
            status: 401,
            message: "Unauthorized action"
        });
    }

    const accessToken = req.headers.authorization.split(" ").pop();

    try {
        jwt.verify(accessToken, process.env.JWT_ACCESS_TOKEN_SECRET, (err, data) => {
            if (err && err.name === "TokenExpiredError") {
                renewAccessToken(req, res, next)
            } else if (err) {
                return res.status(401).json({
                    status: 401,
                    message: err.message
                });
            }
            if (data) {
                req.body.username = data.username;
                next();
            }
        });
    } catch (error) {
        return res.status(401).json({
            status: 401,
            message: error.message
        })
    }
}

export const renewAccessToken = async (req, res, next) => {
    const refreshToken = req.cookies.refreshToken;
    if (!refreshToken) {
        return res.status(401).json({
            status: 401,
            message: "Unauthorized action"
        });
    }
    try {
        jwt.verify(refreshToken, process.env.JWT_REFRESH_TOKEN_SECRET, async (err, data) => {
            if (err && err.name === "TokenExpiredError") {
                return res.status(401).json({
                    status: 401,
                    message: err.message
                });
            } else if (err) {
                return res.status(401).json({
                    status: 401,
                    message: "Unauthorized action"
                });
            }
            if (data) {
                const user = await getUserByToken(data.token);
                if (!user) {
                    return res.status(401).json({
                        status: 401,
                        message: "Unauthorized action"
                    });
                }
                const accessToken = jwt.sign({ username: user.username }, process.env.JWT_ACCESS_TOKEN_SECRET, { expiresIn: process.env.JWT_ACCESS_TOKEN_EXPIRES_IN });
                req.body.accessToken = accessToken;
                req.body.username = user.username;
                next();
            }
        });
    } catch (error) {
        return res.status(401).json({
            status: 401,
            message: error.message
        })
    }
}

export const validateImageUpload = (req, res, next) => {
    if (!req.files) {
        return res.status(400).json({
            status: 400,
            message: "Image file is required"
        });
    }
    const image = req.files.image;
    const fileSize = image.data.length;
    const ext = path.extname(image.name);
    const filename = Date.now() + image.md5 + ext;
    const url = `laporans/images/${filename}`;
    const allowedType = [".png", ".jpg", ".jpeg"];
    if (!allowedType.includes(ext.toLocaleLowerCase())) {
        return res.status(422).json({
            status: 422,
            message: "Invalid image file type allowed png, jpg, jpeg"
        });
    }
    if (fileSize > 3 * 1024 * 1024) {
        return res.status(422).json({
            status: 422,
            message: "Image file size must be less than 3MB"
        });
    }
    image.mv(`./public/images/${filename}`, async (err) => {
        if (err) {
            return res.status(500).json({
                status: 500,
                message: err
            });
        }
    })
    req.body.url = url;
    next();
}

export function validateData(schema) {
    return (req, res, next) => {
        try {
            const data = schema.parse(req.body);
            req.body = { ...req.body, ...data };
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