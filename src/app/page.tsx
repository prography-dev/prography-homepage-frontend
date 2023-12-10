'use client';

import './page.scss';
import Link from 'next/link';
import Typo from '@/components/Home/Typo';
import About from '@/components/Home/About';
import OneTeam from '@/components/Home/OneTeam';
import PageRouterButton from '@/components/Home/PageRouterButton';
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
      <div className="pg-about-button-container">
        <PageRouterButton label="About" href="/about" />
      </div>
      <About />
      <div className="pg-team-button-container">
        <PageRouterButton label="One team" href="/about" />
      </div>
      <OneTeam />
      <div>
        <div className="sf_display_1">Hello! prography-hompage</div>
        <Link href="/test">공통컴포넌트 보러 가기</Link>
        <div style={{ display: 'block', background: 'black', padding: '30px' }}>
          <Button>test</Button>
          <Button disabled>test</Button>
          <Button buttonSize="56">test</Button>
          <Button buttonSize="48">test</Button>
        </div>
        <Link href="/project">프로젝트</Link>
        <div className="sf_heading_2 red600">Hello! prography-hompage</div>
        <Link href="/test">공통컴포넌트 보러 가기</Link>
      </div>
    </div>
  );
}
