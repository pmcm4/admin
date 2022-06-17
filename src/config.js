import axios  from "axios";

export const axiosInstance = axios.create({
    baseURL: "https://unileather-api.herokuapp.com/api/"
})