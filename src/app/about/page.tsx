import React from 'react';

import CommonWrapper from '@/components/common/layout/CommonWrapper';
import styles from './page.module.scss';
import Culture from '@/components/About/Culture';
import CrewList from '@/components/About/CrewList';

export default function AboutPage() {
  return (
    <>
      <CommonWrapper>
        <div className={styles.AboutContainer}>
          <div className={styles.ValueLeftWrapper}>
            <p className={styles.ValueText}>Communication</p>
            <p className={styles.ValueTitle}>
              서로 신뢰하며
              <br />
              소통을 편안하게
            </p>
            <p className={styles.ValueBodyDescription}>
              다채로운 경험을 통해 재밌게, <br />
              보다 편안하게 몰입합니다
            </p>
          </div>

          <div className={styles.ValueRightWrapper}>
            <div className={styles.ValueContent}>
              <p className={styles.ValueText}>High Quality</p>
              <p className={styles.ValueTitle}>
                탁월한 동료와 <br />
                최상의 임팩트 추구
              </p>
              <p className={styles.ValueBodyDescription}>
                각 분야의 실력 있는 크루가 모여 <br />
                도전적인 목표로 나아갑니다.
              </p>
            </div>
          </div>

          <div className={styles.ValueLeftWrapper}>
            <p className={styles.ValueText}>Synergy</p>
            <p className={styles.ValueTitle}>
              함께하는 즐거움에서 <br />
              성취하는 짜릿함으로
            </p>
            <p className={styles.ValueBodyDescription}>
              파트별 최소 인원으로 팀을 구성해
              <br />
              잠재력을 최대한 끌어냅니다.
            </p>
          </div>

          <div className={styles.ValueRightWrapper}>
            <div className={styles.ValueContent}>
              <p className={styles.ValueText}>Improvement</p>
              <p className={styles.ValueTitle}>
                서비스를 지속하기 위해 <br />
                끊임없이 고민
              </p>
              <p className={styles.ValueBodyDescription}>
                런칭 후에도 빠르게 개선하며 <br />
                유저를 위한 정답을 만들어갑니다.
              </p>
            </div>
          </div>
        </div>
      </CommonWrapper>
      <CrewList />
      <Culture />
    </>
  );
}
