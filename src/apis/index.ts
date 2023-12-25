import { AxiosResponse } from 'axios';
import { get } from '@/utils/axios';

export async function getData<T, U = never>(path: string): Promise<T | U> {
  const response: AxiosResponse = await get(`/v1/${path}`);
  const { data } = response;
  return (data.data as T) || ({} as U);
}
