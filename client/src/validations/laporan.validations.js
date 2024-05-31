import * as Yup from 'yup';

export const laporanSchema = Yup.object().shape({
    name: Yup.string()
        .min(3, "Nama Lengkap minimal 3 karakter")
        .max(100, "Nama Lengkap maksimal 100 karakter")
        .required("Nama Lengkap harus diisi"),
    email: Yup.string().email("Email tidak valid").required("Email harus diisi"),
    wa: Yup.string()
        .min(10, "Nomor Whatsapp minimal 10 karakter")
        .max(13, "Nomor Whatsapp maksimal 13 karakter")
        .matches(/^[0-9]+$/, "Hanya angka yang diperbolehkan")
        .required("Nomor Whatsapp harus diisi"),
    kategori: Yup.string().required("Kategori harus diisi"),
    deskripsi: Yup.string().min(6, "Deskripsi minimal 6 karakter").max(300, "Deskripsi maksimal 300 karakter").required("Deskripsi harus diisi"),
    foto: Yup.mixed().required("Foto harus diisi").test("fileSize", "Ukuran file terlalu besar", (value) => {
        if (value) {
            return value.size <= 3145728
        }
        return true
    }).test("fileFormat", "Format file tidak sesuai", (value) => {
        if (value) {
            return ["image/jpeg", "image/jpg", "image/png"].includes(value.type)
        }
        return true
    })
})