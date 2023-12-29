'use client';

import { useState, useEffect } from 'react';
import styles from './Schedule.module.scss';
import { getSessions, SessionType } from '@/apis/session';

interface ScheduleProps {
  id: number;
}

const Schedule = ({ id }: ScheduleProps) => {
  const [sessions, setSessions] = useState<SessionType[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getSessions(id);
      setSessions([...data]);
    };
    fetchData();
  }, []);

  return (
    <>
      <div className={styles.PgScheduleText}>
        프로그라피는 정규 세션을 중심으로 여러 Culture Program을 진행합니다.{' '}
        <div className={styles.BreakPoint} />
        지원 관련 문의는 이메일 또는 Contact 페이지의 FAQ를 확인해 주세요.
      </div>
      {sessions.map(({ startDateTime, endDateTime, name, isOnedaySession }) => (
        <div className={styles.PgScheduleWrapper} key={name}>
          <p className={styles.PgScheduleDate}>
            {startDateTime} {!isOnedaySession && `- ${endDateTime}`}
          </p>
          <p className={styles.PgScheduleName}>{name}</p>
        </div>
      ))}
    </>
  );
};

export default Schedule;
