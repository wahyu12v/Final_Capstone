import express from "express";

const main_router = express.Router();

main_router.get("/", (req, res) => {
    res.json({
        status: 200,
        message: "PANTAS Backend API",
        data: {
            version: "1.0.0"
        }
    })
});

export default main_router;