'use client';

import styles from './page.module.scss';

import Typo from '@/components/Home/Typo';
import About from '@/components/Home/About';
import OneTeam from '@/components/Home/OneTeam';
import Schedule from '@/components/Home/Schedule';
import Project from '@/components/Home/Project';
import PageRouterButton from '@/components/Home/PageRouterButton';

import Button from '@/components/common/button/Button';
import CommonWrapper from '@/components/common/layout/CommonWrapper';

export default function Home() {
  const handleApplyButton = () => {
    // toDo: 구글 폼 나온 후 수정 필요
    window.open('https://prography.org/');
  };

  return (
    <>
      <CommonWrapper>
        <div className={styles.PgTypoContainer}>
          <Typo />
        </div>
        <div className={styles.PgApplyButtonContainer}>
          <Button buttonSize="56" onClick={handleApplyButton}>
            9기 지원
          </Button>
        </div>
        <div className={styles.PgAboutButtonContainer}>
          <PageRouterButton label="About" href="/about" />
        </div>
        <About />
        <div className={styles.PgTeamButtonContainer}>
          <PageRouterButton label="One team" href="/about" />
        </div>
        <OneTeam />
        <h3 className={styles.PgScheduleHead}>9th Schedule</h3>
        <Schedule />
        <div className={styles.PgProjectButtonContainer}>
          <PageRouterButton label="Project" href="/project" />
        </div>
      </CommonWrapper>
      <Project />
    </>
  );
}
