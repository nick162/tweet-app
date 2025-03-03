import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://popularflower-us.backendless.app/api",
});
