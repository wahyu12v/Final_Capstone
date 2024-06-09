import cron from "node-cron";
import fs from 'fs';
import prisma from "../config/db.config.js";
import { mailLaporanToAdmin, mailLaporanToUser, mailLaporanToUserApprove, mailLaporanToUserComplete, mailLaporanToUserProcess, mailLaporanToUserRejected } from "./mail.helper.js";
import { sendMailTransport } from "../config/mail.config.js";
import { phoneNumberFormatter } from "./formatter.helper.js";
import { whatsappToAdmin, whatsappToUser, whatsappToUserApprove, whatsappToUserComplete, whatsappToUserProcess, whatsappToUserReject } from "./whatsapp.helper.js";

let mailRun = false
let waRun = false

export default function cronJobScheduler(sessionMap, connectToWhatsApp) {

    cron.schedule('*/10 * * * * *', async () => {
        if (sessionMap.has(1)) {
            const conn = sessionMap.get(1).sock;
            if (!waRun) {
                const wa = await prisma.whatsapp.findMany({
                    where: {
                        waStatus: 0
                    }
                })
                if (wa.length > 0) {
                    waRun = true
                    wa.forEach(async (data) => {
                        switch (data.waType) {
                            case 0:
                                try {
                                    const number = phoneNumberFormatter(data.waTo)
                                    const exists = await conn.onWhatsApp(number)
                                    if (exists?.jid || (exists && exists[0]?.jid)) {
                                        const pelapor = await prisma.pelapor.findFirst({
                                            where: {
                                                nomorPelapor: data.waTo
                                            }
                                        })
                                        await conn.sendMessage(exists.jid || exists[0].jid, { text: whatsappToUser(pelapor) })
                                        await prisma.whatsapp.update({
                                            where: {
                                                waId: data.waId
                                            },
                                            data: {
                                                dateSended: new Date(),
                                                waStatus: 1
                                            }
                                        })
                                    } else {
                                        await prisma.whatsapp.update({
                                            where: {
                                                waId: data.waId
                                            },
                                            data: {
                                                waStatus: 3
                                            }
                                        })
                                    }
                                } catch (error) {
                                    console.log(error)
                                    await prisma.whatsapp.update({
                                        where: {
                                            waId: data.waId
                                        },
                                        data: {
                                            waStatus: 2
                                        }
                                    })
                                }
                                break;
                            case 1:
                                try {
                                    const number = phoneNumberFormatter(data.waTo)
                                    const exists = await conn.onWhatsApp(number)
                                    if (exists?.jid || (exists && exists[0]?.jid)) {
                                        const admin = await prisma.user.findFirst({
                                            where: {
                                                number: data.waTo
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
                                        await conn.sendMessage(exists.jid || exists[0].jid, { text: whatsappToAdmin(admin, laporan) })
                                        await prisma.whatsapp.update({
                                            where: {
                                                waId: data.waId
                                            },
                                            data: {
                                                dateSended: new Date(),
                                                waStatus: 1
                                            }
                                        })
                                    } else {
                                        await prisma.whatsapp.update({
                                            where: {
                                                waId: data.waId
                                            },
                                            data: {
                                                waStatus: 3
                                            }
                                        })
                                    }
                                } catch (error) {
                                    console.log(error)
                                    await prisma.whatsapp.update({
                                        where: {
                                            waId: data.waId
                                        },
                                        data: {
                                            waStatus: 2
                                        }
                                    })
                                }
                                break;
                            case 2:
                                try {
                                    const number = phoneNumberFormatter(data.waTo)
                                    const exists = await conn.onWhatsApp(number)
                                    if (exists?.jid || (exists && exists[0]?.jid)) {
                                        const pelapor = await prisma.pelapor.findFirst({
                                            where: {
                                                nomorPelapor: data.waTo
                                            }
                                        })
                                        await conn.sendMessage(exists.jid || exists[0].jid, { text: whatsappToUserApprove(pelapor) })
                                        await prisma.whatsapp.update({
                                            where: {
                                                waId: data.waId
                                            },
                                            data: {
                                                dateSended: new Date(),
                                                waStatus: 1
                                            }
                                        })
                                    } else {
                                        await prisma.whatsapp.update({
                                            where: {
                                                waId: data.waId
                                            },
                                            data: {
                                                waStatus: 3
                                            }
                                        })
                                    }
                                } catch (error) {
                                    console.log(error)
                                    await prisma.whatsapp.update({
                                        where: {
                                            waId: data.waId
                                        },
                                        data: {
                                            waStatus: 2
                                        }
                                    })
                                }
                                break;
                            case 3:
                                try {
                                    const number = phoneNumberFormatter(data.waTo)
                                    const exists = await conn.onWhatsApp(number)
                                    if (exists?.jid || (exists && exists[0]?.jid)) {
                                        const pelapor = await prisma.pelapor.findFirst({
                                            where: {
                                                nomorPelapor: data.waTo
                                            }
                                        })
                                        await conn.sendMessage(exists.jid || exists[0].jid, { text: whatsappToUserProcess(pelapor) })
                                        await prisma.whatsapp.update({
                                            where: {
                                                waId: data.waId
                                            },
                                            data: {
                                                dateSended: new Date(),
                                                waStatus: 1
                                            }
                                        })
                                    } else {
                                        await prisma.whatsapp.update({
                                            where: {
                                                waId: data.waId
                                            },
                                            data: {
                                                waStatus: 3
                                            }
                                        })
                                    }
                                } catch (error) {
                                    console.log(error)
                                    await prisma.whatsapp.update({
                                        where: {
                                            waId: data.waId
                                        },
                                        data: {
                                            waStatus: 2
                                        }
                                    })
                                }
                                break;
                            case 4:
                                try {
                                    const number = phoneNumberFormatter(data.waTo)
                                    const exists = await conn.onWhatsApp(number)
                                    if (exists?.jid || (exists && exists[0]?.jid)) {
                                        const pelapor = await prisma.pelapor.findFirst({
                                            where: {
                                                nomorPelapor: data.waTo
                                            }
                                        })
                                        await conn.sendMessage(exists.jid || exists[0].jid, { text: whatsappToUserComplete(pelapor) })
                                        await prisma.whatsapp.update({
                                            where: {
                                                waId: data.waId
                                            },
                                            data: {
                                                dateSended: new Date(),
                                                waStatus: 1
                                            }
                                        })
                                    } else {
                                        await prisma.whatsapp.update({
                                            where: {
                                                waId: data.waId
                                            },
                                            data: {
                                                waStatus: 3
                                            }
                                        })
                                    }
                                } catch (error) {
                                    console.log(error)
                                    await prisma.whatsapp.update({
                                        where: {
                                            waId: data.waId
                                        },
                                        data: {
                                            waStatus: 2
                                        }
                                    })
                                }
                                break;
                            case 5:
                                try {
                                    const number = phoneNumberFormatter(data.waTo)
                                    const exists = await conn.onWhatsApp(number)
                                    if (exists?.jid || (exists && exists[0]?.jid)) {
                                        const pelapor = await prisma.pelapor.findFirst({
                                            where: {
                                                nomorPelapor: data.waTo
                                            }
                                        })
                                        await conn.sendMessage(exists.jid || exists[0].jid, { text: whatsappToUserReject(pelapor) })
                                        await prisma.whatsapp.update({
                                            where: {
                                                waId: data.waId
                                            },
                                            data: {
                                                dateSended: new Date(),
                                                waStatus: 1
                                            }
                                        })
                                    } else {
                                        await prisma.whatsapp.update({
                                            where: {
                                                waId: data.waId
                                            },
                                            data: {
                                                waStatus: 3
                                            }
                                        })
                                    }
                                } catch (error) {
                                    console.log(error)
                                    await prisma.whatsapp.update({
                                        where: {
                                            waId: data.waId
                                        },
                                        data: {
                                            waStatus: 2
                                        }
                                    })
                                }
                                break;
                        }
                    })
                    waRun = false
                }
            }
        }

    })

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
                        case 2:
                            try {
                                const pelapor = await prisma.pelapor.findFirst({
                                    where: {
                                        emailPelapor: data.mailTo
                                    }
                                })
                                await sendMailTransport(mailLaporanToUserApprove(pelapor))
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
                        case 3:
                            try {
                                const pelapor = await prisma.pelapor.findFirst({
                                    where: {
                                        emailPelapor: data.mailTo
                                    }
                                })
                                await sendMailTransport(mailLaporanToUserProcess(pelapor))
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
                        case 4:
                            try {
                                const pelapor = await prisma.pelapor.findFirst({
                                    where: {
                                        emailPelapor: data.mailTo
                                    }
                                })
                                await sendMailTransport(mailLaporanToUserComplete(pelapor))
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
                        case 5:
                            try {
                                const pelapor = await prisma.pelapor.findFirst({
                                    where: {
                                        emailPelapor: data.mailTo
                                    }
                                })
                                await sendMailTransport(mailLaporanToUserRejected(pelapor))
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

    cron.schedule('* * * * *', function () {
        if (fs.existsSync('.auth_info')) {
            if (!sessionMap.has(1)) {
                connectToWhatsApp()
            }
        }
    });

}