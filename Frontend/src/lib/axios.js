import axios from "axios";

export const axiosInstance = axios.create({
    baseURL: "https://syncly-z1ur.onrender.com",
    withCredentials: true, 
})