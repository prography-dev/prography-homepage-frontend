'use client';

import styles from './LandingButton.module.scss';
import Button from '@/components/common/button/Button';

const LandingButton = () => {
  const handleApplyButton = () => {
    // toDo: 구글 폼 나온 후 수정 필요
    window.open('https://prography.org/');
  };
  return (
    <div className={styles.PgApplyButtonContainer}>
      <Button buttonSize="56" onClick={handleApplyButton}>
        9기 지원
      </Button>
    </div>
  );
};

export default LandingButton;
