import prisma from "../config/db.config.js";

export const findLaporanMasuk = async (params) => {
    const skip = (params.page - 1) * params.size;

    const laporans = await prisma.laporan.findMany({
        skip,
        take: params.size,
        include: {
            pelapor: true
        },
        orderBy: {
            dateCreated: 'desc'
        }
    });
    return laporans;
}

export const findLaporansNews = async (params) => {
    const skip = (params.page - 1) * params.size;

    const laporans = await prisma.laporan.findMany({
        skip,
        take: params.size,
        select: {
            laporanId: true,
            lokasiLaporanLat: true,
            lokasiLaporanLng: true,
            kategoriSampah: true,
            dateCreated: true,
            status: true,
            pelapor: {
                select: {
                    namaPelapor: true,
                }
            }
        },
        orderBy: {
            dateCreated: 'desc'
        }
    });
    return laporans;
}

export const findLaporans = async () => {
    const laporans = await prisma.laporan.findMany({
        select: {
            laporanId: true,
            lokasiLaporanLat: true,
            lokasiLaporanLng: true,
            kategoriSampah: true,
            dateCreated: true,
            status: true,
            pelapor: {
                select: {
                    namaPelapor: true,
                }
            }
        },
    });
    return laporans;
}

export const countLaporans = async () => {
    return prisma.laporan.count()
}

export const countLaporansByKategori = async (kategori) => {
    return prisma.laporan.count({ where: { kategoriSampah: kategori } })
}

export const countLaporanPelapor = async () => {
    return prisma.pelapor.count()
}

export const findLaporanById = async (laporanId) => {
    const laporan = await prisma.laporan.findUnique({
        include: {
            pelapor: true
        },
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
        data,
        include: {
            pelapor: true
        }
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