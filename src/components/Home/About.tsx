import { useEffect, useState } from 'react';
import CountUp from 'react-countup';

import styles from './About.module.scss';
import { StatisticType, getStatistics } from '@/apis/statistics';

const About = () => {
  const [loading, setLoading] = useState(false);
  const [count, setCount] = useState<StatisticType>({
    avgApplicant: 0,
    projectNumber: 0,
  });

  useEffect(() => {
    const fetchData = async () => {
      const data = await getStatistics();
      setCount({ ...count, ...data });
      setLoading(true);
    };
    fetchData();
  }, []);

  const defaultOptions = {
    className: styles.PgCountupValue,
    enableScrollSpy: true,
    redraw: true,
  };

  return (
    <div className={styles.PgCountupContainer}>
      <div className={styles.PgCountupWrapper}>
        <CountUp
          end={count.avgApplicant}
          aria-busy={loading}
          {...defaultOptions}
        />
        <span className={styles.PgCountupValue}>+</span>
        <p className={styles.PgCountupLabel}>평균 지원자</p>
      </div>
      <div className={styles.PgCountupWrapper}>
        <CountUp
          end={count.projectNumber}
          aria-busy={loading}
          {...defaultOptions}
        />
        <span className={styles.PgCountupValue}>+</span>
        <p className={styles.PgCountupLabel}>프로젝트</p>
      </div>
    </div>
  );
};

export default About;
