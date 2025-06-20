import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://note-book-iota.vercel.app/",
  timeout: 5000,
});

export default axiosInstance;
