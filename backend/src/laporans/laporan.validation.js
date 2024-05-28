import { z } from "zod";

export const laporanSchema = z.object({
    namaPelapor: z.string().min(6, "Must be at least 6 characters").max(100, "Must be at most 100 characters"),
    nomorPelapor: z.string().min(10, "Must be at least 10 characters").max(100, "Must be at most 100 characters"),
    emailPelapor: z.string().email("Must be a valid email"),
    deskripsiLaporan: z.string().min(6, "Must be at least 6 characters").max(100, "Must be at most 100 characters"),
});