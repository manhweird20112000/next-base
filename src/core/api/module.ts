import type { AxiosResponse } from "axios";
import axios, { type AxiosInstance } from "axios";

class HttpModule {
  private readonly instance: AxiosInstance;

  constructor(baseURL: string, timeout: number = 10000) {
    this.instance = axios.create({
      baseURL,
      timeout,
    });

    this.instance.interceptors.request.use(
      (config) => {
        const token = "";
        if (token) {
          config.headers.Authorization = "Bearer " + token;
        }

        return config;
      },
      (error) => Promise.reject(error)
    );

    this.instance.interceptors.response.use(
      (response: AxiosResponse) => {
        return response.data;
      },
      (error) => {
        return Promise.reject(error);
      }
    );
  }

  getInstance(): AxiosInstance {
    return this.instance;
  }
}

export default HttpModule;
