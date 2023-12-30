import styles from './OneTeam.module.scss';
import { getParts } from '@/apis/part';

async function getPartData() {
  return getParts();
}

export const revalidate = 3600;

const OneTeam = async () => {
  const team = await getPartData();

  return (
    <>
      <p className={styles.PgTeamText}>
        PO, 마케터, 디자이너, 개발자가 한 팀을 이뤄 완성도 높은 서비스를
        만듭니다.
      </p>
      <div className={styles.PgTeamWrapper}>
        {team.map(({ name, homeColor }) => (
          <div
            className={styles.PgTeam}
            style={{ backgroundColor: homeColor }}
            key={name}
          >
            {name}
          </div>
        ))}
      </div>
    </>
  );
};

export default OneTeam;
