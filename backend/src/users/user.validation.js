import { z } from "zod";

export const userLoginSchema = z.object({
    username: z.string({ required_error: 'Username harus diisi' }).min(3, { message: 'Username minimal 3 karakter' }).max(100, { message: 'Username maksimal 100 karakter' }),
    password: z.string({ required_error: 'Kata sandi harus diisi' }).min(3, { message: 'Kata sandi minimal 3 karakter' }).max(100, { message: 'Kata sandi maksimal 100 karakter' }),
});

const passwordSchema = z.string({ required_error: 'Kata sandi baru harus diisi' })
    .min(8, { message: 'Kata sandi harus minimal 8 karakter' })
    .regex(/[A-Z]/, { message: 'Kata sandi harus memiliki minimal 1 huruf besar' })
    .regex(/[a-z]/, { message: 'Kata sandi harus memiliki minimal 1 huruf kecil' })
    .regex(/[0-9]/, { message: 'Kata sandi harus memiliki minimal 1 angka' })
    .regex(/[\W_]/, { message: 'Kata sandi harus memiliki minimal 1 simbol' });

export const pengaturanSchema = z.object({
    passwordLama: z.string({ required_error: 'Kata sandi lama harus diisi' }),
    passwordBaru: passwordSchema,
    passwordBaruKonfirmasi: z.string({ required_error: 'Konfirmasi kata sandi baru harus diisi' }).superRefine((data, ctx) => {
        if (data.passwordBaru !== data.passwordBaruKonfirmasi) {
            ctx.addIssue({
                path: ['passwordBaruKonfirmasi'],
                message: 'Konfirmasi kata sandi baru harus sama dengan kata sandi baru',
            });
        }
    })
});