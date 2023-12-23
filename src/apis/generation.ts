import { AxiosResponse } from 'axios';
import { get, SERVER_URL } from '@/utils/axios';

export interface GenerationType {
  id: number;
  name: string;
  number: number;
  status: string;
  landingUrl: string;
}

export async function getLastGeneration(): Promise<GenerationType | null> {
  const response: AxiosResponse = await get(`${SERVER_URL}/v1/generations`);
  const {
    data: { data },
  } = response;

  if (!data) return null;

  const [lastGeneration] = data.sort(
    (a: GenerationType, b: GenerationType) => b.number - a.number,
  );
  return (lastGeneration as GenerationType) || null;
}
