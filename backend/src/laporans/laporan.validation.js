import { z } from "zod";

export const laporanSchema = z.object({
    namaPelapor: z.string().min(3, "Nama Lengkap minimal 3 karakter").max(100, "Nama Lengkap maksimal 100 karakter"),
    nomorPelapor: z.string().min(10, "Nomor Whatsapp minimal 10 karakter")
        .max(13, "Nomor Whatsapp maksimal 13 karakter")
        .regex(/^[0-9]+$/, "Hanya angka yang diperbolehkan"),
    kategoriSampah: z.string(),
    emailPelapor: z.string().email("Email tidak valid"),
    deskripsiLaporan: z.string().min(6, "Deskripsi minimal 6 karakter").max(300, "Deskripsi maksimal 300 karakter"),
});