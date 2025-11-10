import axios from "axios";

const api = axios.create({
    baseURL:"http://13.201.21.101/api",
    withCredentials:true
})
export default api;