import axios, { AxiosError, AxiosResponse } from "axios";
const token = localStorage.getItem("token") || "";

const baseUrl = __IS_DEV__
  ? "http://localhost:4000/api"
  : "https://prod.ru/api";

const api = axios.create({
  baseURL: baseUrl,
  headers: {
    Authorization: `Bearer ${token}`,
  },
});

const resInterceptor = (res: AxiosResponse) => {
  return res;
};
const errInterceptor = (error: AxiosError) => {
  if (error.response?.status === 401) {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
  }
  return error;
};

api.interceptors.response.use(resInterceptor, errInterceptor);

export default api;
