import Axios from "axios";

//config
import endpoints from "../configs/api";

let httpService = Axios.create({
  baseURL: endpoints.base_url,
});

//request interceptor
httpService.interceptors.request.use(async (config) => {
  return config;
});

//response interceptor
httpService.interceptors.response.use(
  async (response) => {
    return response;
  },
  async (error) => {
    return error;
  }
);

export default httpService;
