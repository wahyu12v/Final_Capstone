import prisma from "../config/db.config.js";

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