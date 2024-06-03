import prisma from "../config/db.config.js";

export const sendWhatsapp = async (data) => {
    const wa = await prisma.whatsapp.create({ data });
    return wa;
}

export const sendWhatsappToAdmin = async (data) => {
    try {
        const admin = await prisma.user.findMany({})
        admin.forEach(async (user) => {
            const wa = await prisma.whatsapp.create({ data: { waType: data.waType, waTo: user.number, laporanId: data.laporanId } });
            return wa;
        })
    } catch (error) {
        return error
    }
}

export const sendMail = async (data) => {
    const mail = await prisma.mail.create({ data });
    return mail;
}

export const sendMailToAdmin = async (data) => {
    try {
        const admin = await prisma.user.findMany({})
        admin.forEach(async (user) => {
            const mail = await prisma.mail.create({ data: { mailType: data.mailType, laporanId: data.laporanId, mailTo: user.email } });
            return mail;
        })
    } catch (error) {
        return error
    }

}

export const sendNotification = async ({ mailTo, waTo, laporanId }) => {
    try {
        await sendMail({
            mailTo,
            mailType: 0,
        })

        await sendWhatsapp({
            waTo,
            waType: 0
        })

        await sendWhatsappToAdmin({
            waType: 1,
            laporanId
        })

        await sendMailToAdmin({
            mailType: 1,
            laporanId
        })
    } catch (error) {
        return error
    }
}