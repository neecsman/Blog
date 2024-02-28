import axios from "axios";
const token = localStorage.getItem("token") || "";

const baseUrl = __IS_DEV__
  ? "http://localhost:4000/api"
  : "https://prod.ru/api";

export const api = axios.create({
  baseURL: baseUrl,
  headers: {
    Authorization: `Bearer ${token}`,
  },
});
