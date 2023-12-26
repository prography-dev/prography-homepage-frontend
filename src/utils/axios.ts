import axios, { AxiosError } from 'axios';

export const BASE_URL = '/';
export const SERVER_URL = 'http://43.202.243.99:8080';

export const instance = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
});

axios.interceptors.response.use(
  response => {
    return response;
  },
  (error: AxiosError) => {
    // toDo: error 분기처리
    console.log(error);
    return Promise.reject(error);
  },
);

export function get<T>(...args: Parameters<typeof instance.get>) {
  return instance.get<T, T>(...args);
}

export function post<T>(...args: Parameters<typeof instance.post>) {
  return instance.post<T, T>(...args);
}

export function put<T>(...args: Parameters<typeof instance.put>) {
  return instance.put<T, T>(...args);
}

export function patch<T>(...args: Parameters<typeof instance.patch>) {
  return instance.patch<T, T>(...args);
}

export function del<T>(...args: Parameters<typeof instance.delete>) {
  return instance.delete<T, T>(...args);
}
