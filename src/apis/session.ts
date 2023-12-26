import { AxiosResponse } from 'axios';
import { get } from '@/utils/axios';
import { formatDateToString, isOnedaySession } from '@/utils/formatDate';

export interface SessionType {
  name: string;
  startDateTime: string;
  endDateTime: string;
  isOnedaySession: boolean;
}

export async function getSessions(
  generationId: number,
  status: string,
): Promise<SessionType[] | []> {
  const sessionTypes =
    status === 'RECRUIT'
      ? ['RECRUIT'].join(',')
      : ['EVENT', 'GENERAL_ALL', 'GENERAL_TEAM', 'GENERAL_PART'].join(',');
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
      endDateTime: formatDateToString(session.endDateTime),
    };
  });
  return (formatData as SessionType[]) || [];
}
