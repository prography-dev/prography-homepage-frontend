import styles from './Schedule.module.scss';

interface TimeTableProps {
  startDate: string;
  endDate: string;
  name: string;
}

const Schedule = () => {
  // toDo: api 교체 필요
  const timeTable: TimeTableProps[] = [
    {
      startDate: '01.13',
      endDate: '01.24',
      name: '9기 서류 제출',
    },
    {
      startDate: '01.30',
      endDate: '02.04',
      name: '사전 과제 기간',
    },
    {
      startDate: '02.17',
      endDate: '02.14',
      name: '인터뷰 진행',
    },
    {
      startDate: '02.19',
      endDate: '02.19',
      name: '결과 발표',
    },
  ];
  return (
    <>
      <div className={styles.PgScheduleText}>
        프로그라피는 정규 세션을 중심으로 여러 Culture Program을 진행합니다.{' '}
        <div className={styles.BreakPoint} />
        지원 관련 문의는 이메일 또는 Contact 페이지의 FAQ를 확인해 주세요.
      </div>
      {timeTable.map(({ startDate, endDate, name }) => (
        <div className={styles.PgScheduleWrapper} key={startDate + name}>
          <p className={styles.PgScheduleDate}>
            {startDate} {startDate !== endDate && `- ${endDate}`}
          </p>
          <p className={styles.PgScheduleName}>{name}</p>
        </div>
      ))}
    </>
  );
};

export default Schedule;
