import { useMutation } from "@tanstack/react-query";
import axiosUtil from "../utils/axios.utils";

export const actionPengaturan = ({ onSuccess, onError }) => {
    return useMutation({
        mutationKey: ["actionPengaturan"],
        mutationFn: async (body) => {
            const res = await axiosUtil.patch("/users", body)
            return res.data
        },
        onSuccess,
        onError
    })
}