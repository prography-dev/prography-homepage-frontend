import { AxiosResponse } from 'axios';
import { get } from '@/utils/axios';

export interface FaqType {
  question: string;
  answer: string;
  order: number;
}

export async function getFaqs(): Promise<FaqType[] | []> {
  const response: AxiosResponse = await get('/v1/contact/faq');
  const {
    data: { data },
  } = response;

  return (data as FaqType[]) || [];
}
