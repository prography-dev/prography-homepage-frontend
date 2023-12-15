import { useEffect, useState } from 'react';
import CountUp from 'react-countup';
import styles from './About.module.scss';

interface CountProps {
  applicant: number;
  project: number;
}

const About = () => {
  const [loading, setLoading] = useState(false);
  const [count, setCount] = useState<CountProps>({
    applicant: 0,
    project: 0,
  });

  useEffect(() => {
    // toDo: api 교체 필요
    setCount({ ...count, applicant: 100, project: 50 });
    setLoading(true);
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
          end={count.applicant}
          aria-busy={loading}
          {...defaultOptions}
        />
        <span className={styles.PgCountupValue}>+</span>
        <p className={styles.PgCountupLabel}>평균 지원자</p>
      </div>
      <div className={styles.PgCountupWrapper}>
        <CountUp end={count.project} aria-busy={loading} {...defaultOptions} />
        <span className={styles.PgCountupValue}>+</span>
        <p className={styles.PgCountupLabel}>프로젝트</p>
      </div>
    </div>
  );
};

export default About;
