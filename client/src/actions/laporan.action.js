import { useMutation, useQuery } from "@tanstack/react-query"
import axios from "axios"
import { debouncePromise, memoizeWithInvalidation } from "../utils/memo.utils";
import axiosUtil from "../utils/axios.utils";

export const createLaporan = ({ onSuccess, onError }) => {
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
            const res = await axios.post(`${import.meta.env.VITE_BASE_URL}laporans`, formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            })
            return res.data;
        },
        onSuccess,
        onError
    })
}

export const fetchDbLaporan = () => {
    return useQuery({
        queryKey: ["fetchDbLaporan"],
        queryFn: async () => {
            const res = await axiosUtil.get("/laporans/db")
            return res.data
        }
    })
}

export const getLaporanById = (id) => {
    return useQuery({
        queryKey: ["getLaporanById"],
        queryFn: async () => {
            const res = await axiosUtil.get(`/laporans/${id}`)
            return res.data
        }
    })
}

export const fetchLaporanMasuk = () => {
    return useQuery(['fetchLaporanMasuk', page, perPage], {
        queryKey: ["fetchLaporanMasuk"],
        queryFn: async () => {
            const res = await axiosUtil.get(`/laporans/data-masuk?page=${page}&size=${perPage}`)
            return res.data
        }
    })
}

export const updateLaporan = ({ onSuccess, onError, onMutate }) => {
    return useMutation({
        mutationKey: ["updateLaporan"],
        mutationFn: async ({ id, body }) => {
            console.log(body)
            const res = await axiosUtil.patch(`/laporans/${id}`, body)
            return res.data
        },
        onMutate,
        onSuccess,
        onError
    })
}

export const debounceCheckWaNumber = debouncePromise(async (number) => {
    try {
        const res = await axios.post(`${import.meta.env.VITE_BASE_URL}check-number`, { number: number }, {
            headers: {
                "Content-Type": "application/json",
            }
        })
        return res.data
    } catch (error) {
        return false
    }
}, 500)

export const memoizedCheckWaNumber = memoizeWithInvalidation(async (number) => {
    try {
        const res = await axios.post(`${import.meta.env.VITE_BASE_URL}check-number`, { number: number }, {
            headers: {
                "Content-Type": "application/json",
            }
        })
        return res.data
    } catch (error) {
        return false
    }
}, 3000)