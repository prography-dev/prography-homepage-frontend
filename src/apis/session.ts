import { AxiosResponse } from 'axios';
import { get } from '@/utils/axios';
import {
  formatDateToString,
  formatEndDate,
  isOnedaySession,
} from '@/utils/formatDate';

export interface SessionType {
  name: string;
  startDateTime: string;
  endDateTime: string;
  isOnedaySession: boolean;
}

export async function getSessions(
  generationId: number,
): Promise<SessionType[] | []> {
  const sessionTypes = ['RECRUIT', 'EVENT'].join(',');
  const params = { generationId, sessionTypes };

  const response: AxiosResponse = await get('/v1/sessions', { params });
  const {
    data: { data },
  } = response;

  if (!data) return [];

  const formatData = data.map((session: SessionType) => {
    return {
      ...session,
      isOnedaySession: isOnedaySession(
        session.startDateTime,
        session.endDateTime,
      ),
      startDateTime: formatDateToString(session.startDateTime),
      endDateTime: formatEndDate(session.endDateTime),
    };
  });
  return (formatData as SessionType[]) || [];
}
