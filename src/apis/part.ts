import { AxiosResponse } from 'axios';
import { get, SERVER_URL } from '@/utils/axios';

export interface PartType {
  name: string;
  homeColor: string;
}

export async function getParts(): Promise<PartType[] | []> {
  const response: AxiosResponse = await get(`${SERVER_URL}/v1/parts`);
  const {
    data: { data },
  } = response;

  return (data as PartType[]) || [];
}
