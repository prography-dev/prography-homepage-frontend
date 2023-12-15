import { TypeAnimation } from 'react-type-animation';
import styles from './Typo.module.scss';

const Typo = () => {
  // 텍스트 이동간 대기 시간
  const DELAY_TIME = 1000;
  const sequence = [
    'Pro P.O',
    DELAY_TIME,
    '',
    'Pro Marketer',
    DELAY_TIME,
    '',
    'Pro Designer',
    DELAY_TIME,
    '',
    'Pro Developer',
    DELAY_TIME,
    '',
  ];

  return (
    <div className="pg-text-container">
      <span className={styles.pgText}>Create new&nbsp;</span>
      <div className={styles.Break1} />
      <span className={styles.pgText}>value&nbsp;</span>
      <div className={styles.Break2} />
      <span className={styles.pgText}>with&nbsp;</span>
      <div className={styles.Break1} />
      <TypeAnimation
        sequence={sequence}
        wrapper="span"
        speed={10}
        cursor={false}
        deletionSpeed={10}
        className={`${styles.pgText} ${styles.pgTextTypo}`}
        repeat={Infinity}
      />
    </div>
  );
};

export default Typo;
