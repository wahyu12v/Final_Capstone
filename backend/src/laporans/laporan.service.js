import { findLaporans, createLaporan, deleteLaporan, editLaporan } from "./laporan.repository.js";


export const createLaporanService = async (data) => {
    const laporan = await createLaporan(data);
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