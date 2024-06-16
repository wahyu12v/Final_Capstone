import * as Yup from 'yup';

export const masukSchema = Yup.object().shape({
    username: Yup.string()
        .min(3, "Nama Pengguna minimal 3 karakter")
        .max(100, "Nama Pengguna maksimal 100 karakter")
        .required("Nama Pengguna harus diisi"),
    password: Yup.string()
        .min(3, "Kata sandi minimal 3 karakter")
        .required("Kata sandi harus diisi")
})