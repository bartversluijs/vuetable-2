import { AxiosRequestConfig, Method as HttpMethod } from 'axios';

export interface VuetableHttpOptions {
  method?: HttpMethod;
  headers?: AxiosRequestConfig['headers'];
  params?: AxiosRequestConfig['params'];
  data?: AxiosRequestConfig['data'];
}

export interface DatatableResponsePagination {
  total: number;
  per_page: number;
  current_page: number;
  last_page: number;
  from: number;
  to: number;
}

export interface VuetableResponse<T> {
  links: {
    pagination: DatatableResponsePagination;
  };

  data: Array<T>;
}

export interface VuetableResponseLegacy<T> extends DatatableResponsePagination {
  data: Array<T>;
}

export type VuetableHttpFetch<T> = (apiUrl: string, httpOptions: VuetableHttpOptions) => VuetableResponse<T> | VuetableResponseLegacy<T>;
