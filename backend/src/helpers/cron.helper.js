import cron from "node-cron";
import prisma from "../config/db.config.js";
import { mailLaporanToAdmin, mailLaporanToUser } from "./mail.helper.js";
import { sendMailTransport } from "../config/mail.config.js";

let mailRun = false

export default function cronJobScheduler() {
    cron.schedule('*/10 * * * * *', async () => {
        if (!mailRun) {
            const mail = await prisma.mail.findMany({
                where: {
                    mailStatus: 0
                }
            })
            if (mail.length > 0) {
                mailRun = true
                mail.forEach(async (data) => {

                    switch (data.mailType) {
                        case 0:
                            try {
                                const pelapor = await prisma.pelapor.findFirst({
                                    where: {
                                        emailPelapor: data.mailTo
                                    }
                                })
                                await sendMailTransport(mailLaporanToUser(pelapor))
                                await prisma.mail.update({
                                    where: {
                                        mailId: data.mailId
                                    },
                                    data: {
                                        mailStatus: 1,
                                        dateSended: new Date()
                                    }
                                })
                            } catch (error) {
                                console.log(error)
                                await prisma.mail.update({
                                    where: {
                                        mailId: data.mailId
                                    },
                                    data: {
                                        mailStatus: 2,
                                    }
                                })
                            }
                            break;

                        case 1:
                            try {
                                const admin = await prisma.user.findFirst({
                                    where: {
                                        email: data.mailTo
                                    }
                                })
                                const laporan = await prisma.laporan.findUnique({
                                    include: {
                                        pelapor: true
                                    },
                                    where: {
                                        laporanId: data.laporanId
                                    }
                                })

                                await sendMailTransport(mailLaporanToAdmin(admin, laporan))

                                await prisma.mail.update({
                                    where: {
                                        mailId: data.mailId
                                    },
                                    data: {
                                        mailStatus: 1,
                                        dateSended: new Date()
                                    }
                                })
                            } catch (error) {
                                console.log(error)
                                await prisma.mail.update({
                                    where: {
                                        mailId: data.mailId
                                    },
                                    data: {
                                        mailStatus: 2,
                                    }
                                })
                            }
                            break;
                    }
                })
                mailRun = false
            }
        }
    })
}