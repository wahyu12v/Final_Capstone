import axios from "axios";


const axiosUtil = axios.create({
    baseURL: import.meta.env.VITE_BASE_URL,
    timeout: 10000,
    headers: {
        "Content-Type": "application/json",
    },
});

axiosUtil.interceptors.request.use(
    (config) => {
        const accessToken = localStorage.getItem("token");
        if (accessToken) {
            config.headers.Authorization = `Bearer ${accessToken}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export default axiosUtil;
