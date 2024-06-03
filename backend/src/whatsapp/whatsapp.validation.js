import { z } from "zod";

export const whatsaapSchema = z.object({
    number: z.string().min(10, "Nomor Whatsapp minimal 10 karakter")
        .max(13, "Nomor Whatsapp maksimal 13 karakter")
        .regex(/^[0-9]+$/, "Hanya angka yang diperbolehkan"),
});