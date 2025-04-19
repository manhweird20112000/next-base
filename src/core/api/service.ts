import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import HttpModule from "./module";

abstract class IHttpAdapter<T = unknown, R = unknown> {
  abstract readonly instance: T;
  abstract get<TParams = unknown>(url: string, params?: TParams): Promise<R>;
  abstract post<TData = unknown>(
    url: string,
    data?: TData,
    options?: AxiosRequestConfig
  ): Promise<R>;
  abstract put<TData = unknown>(url: string, data?: TData): Promise<R>;
  abstract patch<TData = unknown>(url: string, data?: TData): Promise<R>;
  abstract delete(url: string): Promise<R>;
}

export class HttpService implements IHttpAdapter<AxiosInstance, AxiosResponse> {
  readonly instance: AxiosInstance;

  constructor(baseURL?: string) {
    this.instance = new HttpModule(
      baseURL || process.env.API_URL || ""
    ).getInstance();
  }

  get<TParams = unknown>(
    url: string,
    params?: TParams
  ): Promise<AxiosResponse> {
    return this.instance.get(url, { params });
  }

  post<TData = unknown>(
    url: string,
    data?: TData,
    options?: AxiosRequestConfig
  ): Promise<AxiosResponse> {
    return this.instance.post(url, data, options);
  }

  put<TData = unknown>(url: string, data?: TData): Promise<AxiosResponse> {
    return this.instance.put(url, data);
  }

  patch<TData = unknown>(url: string, data?: TData): Promise<AxiosResponse> {
    return this.instance.patch(url, data);
  }

  delete(url: string): Promise<AxiosResponse> {
    return this.instance.delete(url);
  }
}
