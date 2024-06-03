import { phoneNumberFormatter } from "../helpers/formatter.helper.js";
import { validateData } from "../middleware/middleware.js";
import { whatsaapSchema } from "./whatsapp.validation.js";

export const whatsappController = (app, sessionMap) => {
    const device = (sender) => {
        if (sessionMap.get(sender).sock !== 'undefined') {
            return sessionMap.get(sender).sock
        } else {
            return false
        }
    }
    app.post("/check-number", validateData(whatsaapSchema), async (req, res) => {
        const number = phoneNumberFormatter(req.body.number)
        if (device(1)) {
            const conn = device(1)
            const exists = await conn.onWhatsApp(number)
            if (exists?.jid || (exists && exists[0]?.jid)) {
                res.status(200).json({
                    status: true,
                    message: 'Nomor terdaftar'
                });
            } else {
                res.status(422).json({
                    status: false,
                    message: `Nomor tidak terdaftar di whatsaap`
                });
            }
        } else {
            res.status(500).json({
                status: false,
                message: 'Please scan the QR before use this API'
            });
        }
    });
}