import axiosClient from "../api/axiosClient";

export function getRequest(url, config = {}) {
  return axiosClient.get(url, config);
}
