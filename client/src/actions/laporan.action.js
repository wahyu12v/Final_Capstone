import { useMutation } from "@tanstack/react-query"
import axios from "axios"

export const createLaporan = ({ onSuccess }) => {
    return useMutation({
        mutationKey: ["createLaporan"],
        mutationFn: async (body) => {
            const formData = new FormData();
            formData.append("namaPelapor", body.name);
            formData.append("emailPelapor", body.email);
            formData.append("nomorPelapor", body.wa);
            formData.append("lokasiLaporanLat", body.lat);
            formData.append("lokasiLaporanLng", body.lng);
            formData.append("kategoriSampah", body.kategori);
            formData.append("deskripsiLaporan", body.deskripsi);
            formData.append("image", body.foto);
            const res = await axios.post("http://localhost:3000/laporans", formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            })
            return res.data;
        },
        onSuccess,
    })
}