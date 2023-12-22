import Image from 'next/image';
import styles from './AsanDonation.module.scss';

const AsanDonation = () => {
  return (
    <div className={styles.PgDonationWrapper}>
      <Image
        className={styles.PgDonationLogo}
        width={198}
        height={40}
        src="/assets/logos/donation.svg"
        alt="아산나눔재단"
      />
      <div className={styles.PgDonationDescription}>
        프로그라피는 건강한 창업 생태계를 응원하는{' '}
        <div className={styles.BreakPoint} />
        아산나눔재단의 후원을 받고 있습니다.
        <br />
        열정적인 스타트업들과 네트워킹 프로그램을{' '}
        <div className={styles.BreakPoint} />
        진행하고 있어요.
      </div>
    </div>
  );
};

export default AsanDonation;
