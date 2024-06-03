import rateLimit from "express-rate-limit";

export const limiter = rateLimit({
    windowMs: 5 * 60 * 1000, // 5 menit
    max: 100, // batas maksimal 100 request per IP
});