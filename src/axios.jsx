import axios from "axios";

console.log("Base URL being used:", import.meta.env.VITE_API_BASE_URL);
const api = axios.create({
    baseURL:import.meta.env.VITE_API_BASE_URL,
    withCredentials:true
})
export default api;