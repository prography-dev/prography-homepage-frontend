'use client';

import './page.scss';
import Typo from '@/components/Home/Typo';
import Button from '@/components/common/button/Button';

export default function Home() {
  const handleApplyButton = () => {
    // toDo: 구글 폼 나온 후 수정 필요
    window.open('https://prography.org/');
  };

  return (
    <div className="pg-home-container">
      <div className="pg-typo-container">
        <Typo />
      </div>
      <div className="pg-apply-button-container">
        <Button buttonSize="56" onClick={handleApplyButton}>
          9기 지원
        </Button>
      </div>
    </div>
  );
}
