import styles from './page.module.scss';

import { getParts } from '@/apis/part';

import Typo from '@/components/Home/Typo';
import LandingButton from '@/components/Home/LandingButton';
import About from '@/components/Home/About';
import OneTeam from '@/components/Home/OneTeam';
import Schedule from '@/components/Home/Schedule';
import Project from '@/components/Home/Project';
import AsanDonation from '@/components/common/donation/AsanDonation';
import PageRouterButton from '@/components/Home/PageRouterButton';

import CommonWrapper from '@/components/common/layout/CommonWrapper';

async function getPartData() {
  return getParts();
}

export default async function Home() {
  const team = await getPartData();

  return (
    <>
      <CommonWrapper>
        <div className={styles.PgTypoContainer}>
          <Typo />
        </div>
        <LandingButton />
        <div className={styles.PgAboutButtonContainer}>
          <PageRouterButton label="About" href="/about" />
        </div>
        <About />
        <div className={styles.PgTeamButtonContainer}>
          <PageRouterButton label="One team" href="/about#crew" />
        </div>
        <OneTeam team={team} />
        <h3 className={styles.PgScheduleHead}>9th Schedule</h3>
        <Schedule />
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
