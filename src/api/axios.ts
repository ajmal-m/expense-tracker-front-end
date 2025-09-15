import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://expense-tracker-node-tgz3.onrender.com/api",
  headers: {
    "Content-Type": "application/json",
  },
});

axiosInstance.interceptors.request.use((config) => {
  const token = localStorage.getItem("expense-tracker-token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default axiosInstance;
