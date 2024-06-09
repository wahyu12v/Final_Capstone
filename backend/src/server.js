import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import { __dirname } from "./config/utils.config.js";
import main_router from "./main/main.controller.js";
import user_router from "./users/user.controller.js";
import laporan_router from "./laporans/laporan.controller.js";
import { connectToWhatsApp, sessionOnMap } from "./config/wa.config.js";
import cronJobScheduler from "./helpers/cron.helper.js";
import { whatsappController } from "./whatsapp/whatsapp.controller.js";
import helmet from "helmet";
import cookieParser from 'cookie-parser'
import { limiter } from "./config/limit.config.js";

dotenv.config();
const PORT = process.env.PORT || 5000;
const app = express();

app.use(helmet(helmet({
    crossOriginResourcePolicy: false,
})));
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(cors({
    origin: [process.env.CLIENT_URL],
    credentials: true,
}));
app.use(express.json());
app.use(cookieParser())
app.use(limiter);

connectToWhatsApp();

app.use("/", main_router);
app.use("/users", user_router);
app.use('/laporans', laporan_router);
app.use('/laporans/images', express.static('public/images'));

whatsappController(app, sessionOnMap);
cronJobScheduler(sessionOnMap, connectToWhatsApp);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});

