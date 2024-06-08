import rateLimit from "express-rate-limit";

export const limiter = rateLimit({
    windowMs: 5 * 60 * 1000, // 5 menit
    max: 1000, // batas maksimal 1000 request per IP
});