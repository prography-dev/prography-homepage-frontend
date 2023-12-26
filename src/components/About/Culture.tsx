'use client';

import usePc from '@/hooks/usePc';
import styles from './Culture.module.scss';

const Culture = () => {
  const isChangePc = usePc();

  return (
    <div className={styles.CultureWrapper}>
      <p className="sf_h3_to_h1">Culture</p>
      <div className={styles.CultureContainer}>
        <div className={styles.CultureLeftSection}>
          <img src="/assets/images/culture-img-1.png" alt="" />

          <div className={styles.CultureDescription}>
            <div className={styles.SectionDate}>03.02 - 03.03</div>
            <p className={styles.SectionTitle}>Membership Training</p>
            <p className={styles.SectionDetail}>
              프로그라피가 가진 색깔에 녹아드는 시간을 가지며,
              {isChangePc && <br />}팀 레크레이션을 통해 크루들 간 네트워킹을
              도모합니다.
            </p>
          </div>
        </div>

        <div className={styles.CultureSection}>
          <div className={styles.CultureDescription}>
            <div className={styles.SectionDate}>03.09</div>
            <p className={styles.SectionTitle}>Orientation</p>
            <p className={styles.SectionDetail}>
              프로덕트를 함께 만들 최고의 팀이 만들어질 수 있도록{' '}
              {isChangePc && <br />}
              팀빌딩 프로그램을 진행합니다.
            </p>
          </div>

          <img src="/assets/images/culture-img-2.png" alt="" />
        </div>

        <div className={styles.CultureLeftSection}>
          <img src="/assets/images/culture-img-3.png" alt="" />

          <div className={styles.CultureDescription}>
            <div className={styles.SectionDate}>05.11 - 05.12</div>
            <p className={styles.SectionTitle}>Hakathon</p>
            <p className={styles.SectionDetail}>
              정규 세션 외 별도의 프로덕트를 만드는 세션으로,{' '}
              {isChangePc && <br />}
              팀원들과 합을 맞추고 프로젝트에 대한 열망을 키워갑니다.
            </p>
          </div>
        </div>

        <div className={styles.CultureSection}>
          <div className={styles.CultureDescription}>
            <div className={styles.SectionDate}>05.25</div>
            <p className={styles.SectionTitle}>Prography Day</p>
            <p className={styles.SectionDetail}>
              프로그라피만의 특별한 이벤트로,{isChangePc && <br />}
              다양한 배경을 가진 크루들과 네트워크를 강화하는 시간을 가집니다.
            </p>
          </div>

          <img src="/assets/images/culture-img-4.png" alt="" />
        </div>

        <div className={styles.CultureLeftSection}>
          <img src="/assets/images/culture-img-5.png" alt="" />

          <div className={styles.CultureDescription}>
            <div className={styles.SectionDate}>07.13</div>
            <p className={styles.SectionTitle}>Demo Day</p>
            <p className={styles.SectionDetail}>
              지금까지 열심히 개발한 프로덕트를 공유하고, {isChangePc && <br />}
              서로 양질의 피드백을 제공하며 서비스 완성에 한 걸음 다가갑니다.
            </p>
          </div>
        </div>

        <div className={styles.CultureSection}>
          <div className={styles.CultureDescription}>
            <div className={styles.SectionDate}>08.24</div>
            <p className={styles.SectionTitle}>StartUp Day</p>
            <p className={styles.SectionDetail}>
              영향력있는 스타트업과 만남의 장을 가지며,{isChangePc && <br />}
              새로운 기회와 네트워크를 발굴합니다.
            </p>
          </div>

          <img src="/assets/images/culture-img-6.png" alt="" />
        </div>

        <div className={styles.CultureLeftSection}>
          <img src="/assets/images/culture-img-7.png" alt="" />

          <div className={styles.CultureDescription}>
            <div className={styles.SectionDate}>09.28</div>
            <p className={styles.SectionTitle}>Prography Conference</p>
            <p className={styles.SectionDetail}>
              프로덕트를 만들고 운영하기까지의 경험을 회고하며{' '}
              {isChangePc && <br />}
              프로그라피의 마무리를 장식합니다.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Culture;