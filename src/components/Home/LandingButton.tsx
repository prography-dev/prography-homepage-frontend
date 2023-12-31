'use client';

import Button from '@/components/common/button/Button';
import styles from './LandingButton.module.scss';
import triggerGtm from '@/utils/triggerGtm';

interface LandingButtonProps {
  name: string;
  status: string;
  url: string;
}

const LandingButton = ({ name, status, url }: LandingButtonProps) => {
  const handleApplyButton = () => {
    triggerGtm({
      event: 'home.button',
      status,
    });
    window.open(url);
  };

  const buttonName = (() => {
    if (status === 'WAIT') {
      return `${name} 모집 알림 신청`;
    }
    if (status === 'RECRUIT') {
      return `${name} 지원`;
    }
    if (status === 'ACTIVE') {
      return `${name} 활동 스토리`;
    }
    return '';
  })();

  return (
    <div className={styles.PgApplyButtonContainer}>
      {buttonName && (
        <Button buttonSize="56" onClick={handleApplyButton}>
          {buttonName}
        </Button>
      )}
    </div>
  );
};

export default LandingButton;
