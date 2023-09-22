import axios from "axios";

const VITE_USER_API_URL = import.meta.env.VITE_USER_API_URL


export const axiosUserApi = axios.create({
    baseURL : VITE_USER_API_URL,
    headers : {
     "Content-Type":" application/json"
    }
})