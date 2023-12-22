import { useState, useEffect } from 'react';
import styles from './OneTeam.module.scss';
import { PartType, getParts } from '@/apis/part';

const OneTeam = () => {
  // toDo: api 교체 필요
  const [team, setTeam] = useState<PartType[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getParts();
      setTeam(data);
    };
    fetchData();
  }, []);
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
