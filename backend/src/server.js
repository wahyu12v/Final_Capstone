import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import main_router from "./main/main.controller.js";
import user_router from "./users/user.controller.js";

dotenv.config();
const PORT = process.env.PORT || 5000;
const app = express();

app.use(cors());
app.use(express.json());

app.use("/", main_router);
app.use("/users", user_router);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});

