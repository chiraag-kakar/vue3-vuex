import axios from "axios";

const apiClient = axios.create({
  baseURL: "http://18.177.140.79:8080/",
  headers: {
    "Content-type": "application/json",
  },
});

export default apiClient;