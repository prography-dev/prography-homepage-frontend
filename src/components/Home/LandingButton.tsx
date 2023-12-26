'use client';

import styles from './LandingButton.module.scss';
import Button from '@/components/common/button/Button';
import triggerGtm from '@/utils/triggerGtm';

interface LandingButtonProps {
  name: string;
  status: string;
  url: string;
}

const LandingButton = ({ name, status, url }: LandingButtonProps) => {
  const handleApplyButton = () => {
    // toDo: 구글 폼 나온 후 수정 필요
    window.open('https://prography.org/');
    triggerGtm({
      event: '지원버튼',
      parameter: {
        path: '/',
      },
    });
    window.open(url);
  };

  const buttonName = `${name} ${
    status === 'RECRUIT' ? '지원' : '모집 알림 신청'
  }`;

  return (
    <div className={styles.PgApplyButtonContainer}>
      <Button buttonSize="56" onClick={handleApplyButton}>
        {buttonName}
      </Button>
    </div>
  );
};

export default LandingButton;
