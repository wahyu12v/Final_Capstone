import * as Yup from 'yup';

const passwordSchema = Yup.string()
    .min(8, 'Kata sandi harus minimal 8 karakter')
    .matches(/[A-Z]/, 'Kata sandi harus memiliki minimal 1 huruf besar')
    .matches(/[a-z]/, 'Kata sandi harus memiliki minimal 1 huruf kecil')
    .matches(/[0-9]/, 'Kata sandi harus memiliki minimal 1 angka')
    .matches(/[\W_]/, 'Kata sandi harus memiliki minimal 1 simbol');

export const pengaturanSchema = Yup.object().shape({
    passwordLama: Yup.string().required('Kata sandi lama diperlukan'),
    passwordBaru: passwordSchema.required('Kata sandi baru diperlukan'),
    passwordBaruKonfirmasi: Yup.string()
        .oneOf([Yup.ref('passwordBaru')], 'Konfirmasi kata sandi baru harus sama dengan kata sandi baru')
        .required('Konfirmasi kata sandi baru diperlukan'),
});