import axios from "axios";

const axiosClient = axios.create({
  baseURL: process.env.REACT_APP_GITHUB_API_ENDPOINT,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

export default axiosClient;
