import { useMutation, useQuery } from "@tanstack/react-query";
import axiosUtil from "../utils/axios.utils";

export const actionMasuk = ({ onSuccess, onError }) => {
    return useMutation({
        mutationKey: ["actionMasuk"],
        mutationFn: async (body) => {
            const res = await axiosUtil.post("/users/login", body)
            return res.data
        },
        onSuccess,
        onError
    })
}

export const actionGetUser = () => {
    return useQuery({
        queryKey: ["fetchUser"],
        queryFn: async () => {
            const res = await axiosUtil.get("/users")
            return res.data
        },
    })
}

export const actionLogout = () => {
    return useQuery({
        queryKey: ["logoutUser"],
        queryFn: async () => {
            const res = await axiosUtil.delete("/users")
            return res.data
        },
    })
}