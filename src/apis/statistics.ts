import { AxiosResponse } from 'axios';
import { get } from '@/utils/axios';

export interface StatisticType {
  avgApplicant: number;
  projectNumber: number;
}

export async function getStatistics(): Promise<StatisticType | null> {
  const response: AxiosResponse = await get('/v1/statistics');
  const {
    data: { data },
  } = response;

  return (data as StatisticType) || null;
}
