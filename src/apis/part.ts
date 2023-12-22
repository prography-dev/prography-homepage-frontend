import { AxiosResponse } from 'axios';
import { get } from '@/utils/axios';

export interface PartType {
  name: string;
  homeColor: string;
}

export async function getParts(): Promise<PartType[] | []> {
  const response: AxiosResponse = await get('/v1/parts');
  const {
    data: { data },
  } = response;

  return (data as PartType[]) || [];
}
