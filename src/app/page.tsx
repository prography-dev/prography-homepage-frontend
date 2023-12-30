import { revalidateTag } from 'next/cache';
import styles from './page.module.scss';

import { getLastGeneration } from '@/apis/generation';

import Typo from '@/components/Home/Typo';
import LandingButton from '@/components/Home/LandingButton';
import About from '@/components/Home/About';
import OneTeam from '@/components/Home/OneTeam';
import Schedule from '@/components/Home/Schedule';
import Project from '@/components/Home/Project';
import AsanDonation from '@/components/common/donation/AsanDonation';
import PageRouterButton from '@/components/Home/PageRouterButton';

import CommonWrapper from '@/components/common/layout/CommonWrapper';

async function getGenerationData() {
  revalidateTag('generation');
  return getLastGeneration();
}

export const revalidate = 300;

export default async function Home() {
  const generation = await getGenerationData();

  if (!generation) return alert('서버 문제 발생');
  const { id, name, status, landingUrl } = generation;

  return (
    <>
      <CommonWrapper>
        <div className={styles.PgTypoContainer}>
          <Typo />
        </div>
        <LandingButton name={name} status={status} url={landingUrl} />
        <div className={styles.PgAboutButtonContainer}>
          <PageRouterButton label="About" href="/about" />
        </div>
        <About />
        <div className={styles.PgTeamButtonContainer}>
          <PageRouterButton label="One team" href="/about#crew" />
        </div>
        {/* @ts-ignore: server-side component */}
        <OneTeam />
        <h3 className={styles.PgScheduleHead}>9th Schedule</h3>
        <Schedule id={id} />
        <div className={styles.PgProjectButtonContainer}>
          <PageRouterButton label="Project" href="/project" />
        </div>
      </CommonWrapper>
      <Project />
      <CommonWrapper>
        <div className={styles.PgDonationContainer}>
          <AsanDonation />
        </div>
      </CommonWrapper>
    </>
  );
}
