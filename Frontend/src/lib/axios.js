// import axios from "axios";

// export const axiosInstance = axios.create({
//     baseURL: "https://syncly-z1ur.onrender.com",
//     withCredentials: true, 
// })

import axios from "axios";

const baseURL = import.meta.env.PROD
    ? "https://syncly-z1ur.onrender.com" // ⬅️ production backend
    : import.meta.env.VITE_BACKEND_URL;   // ⬅️ development backend (localhost)

export const axiosInstance = axios.create({
    baseURL,
    withCredentials: true,
});
