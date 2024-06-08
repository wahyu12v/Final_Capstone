import { findLaporans, createLaporan, deleteLaporan, editLaporan, findLaporansNews, countLaporans, countLaporansByKategori, countLaporanPelapor, findLaporanMasuk, findLaporanById } from "./laporan.repository.js";


export const createLaporanService = async (data) => {
    const laporan = await createLaporan(data);
    return laporan;
}

export const findLaporanByIdService = async (laporanId) => {
    const laporan = await findLaporanById(laporanId);
    return laporan;
}

export const deleteLaporanService = async (laporanId) => {
    const laporan = await deleteLaporan(laporanId);
    return laporan;
}

export const editLaporanService = async (laporanId, data) => {
    const laporan = await editLaporan(laporanId, data);
    return laporan;
}


export const findLaporansService = async () => {
    const laporans = await findLaporans();
    return laporans;
}

export const findLaporanNewsService = async (params) => {
    const laporans = await findLaporansNews(params)
    const total = await countLaporans()
    return {
        laporans,
        pagging: {
            size: params.size,
            total_page: Math.ceil(total / params.size),
            total: total,
            current_page: params.page
        }
    }
}

export const findLaporanMasukService = async (params) => {
    const laporans = await findLaporanMasuk(params)
    const total = await countLaporans()
    return {
        laporans,
        pagging: {
            size: params.size,
            total_page: Math.ceil(total / params.size),
            total: total,
            current_page: params.page
        }
    }
}

export const findLaporanDbService = async () => {
    const parah = await countLaporansByKategori(3);
    const sedang = await countLaporansByKategori(2);
    const biasa = await countLaporansByKategori(1);
    const pelapor = await countLaporanPelapor();
    return { parah, sedang, biasa, pelapor };
}