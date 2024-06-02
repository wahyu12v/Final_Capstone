import prisma from "../config/db.config.js";

export const findLaporans = async () => {
    const laporans = await prisma.laporan.findMany({
        include: {
            pelapor: true
        }
    });
    return laporans;
}

export const findLaporanById = async (laporanId) => {
    const laporan = await prisma.laporan.findUnique({
        where: {
            laporanId
        }
    });
    return laporan;
}

export const createLaporan = async (data) => {
    const laporan = await prisma.laporan.create({
        data
    });
    return laporan;
}

export const editLaporan = async (laporanId, data) => {
    const laporan = await prisma.laporan.update({
        where: {
            laporanId
        },
        data
    });
    return laporan;
}

export const deleteLaporan = async (laporanId) => {

    const checkLaporan = await findLaporanById(laporanId);

    if (checkLaporan === null) {
        throw new Error("Laporan not found");
    }

    const laporan = await prisma.laporan.delete({
        where: {
            laporanId
        }
    });
    return laporan;
}

export const findLaporansByUser = async (username) => {
    const laporans = await prisma.laporan.findMany({
        where: {
            username
        }
    });
    return laporans;
}