import { IconInstagram } from '../common/icon';
import { ProjectCardData } from '@/apis/project';
import StackTag from '../common/stackTag/StackTag';
import styles from './ModalTitle.module.scss';

const ModalTitle = ({
  generation,
  title,
  stacks,
  socials,
}: Pick<ProjectCardData, 'generation' | 'title' | 'stacks' | 'socials'>) => {
  // TODO(meainigood): type에 instgram만 있는지 확인 필요, 공통 함수로 뺼지 확인 필요
  function getLandingURL(socialType: string) {
    const social = socials.find(s => s.type === socialType);
    return social ? social.landingUrl : '';
  }

  return (
    <div className={styles.TitleWrapper}>
      <div className={styles.Contents}>
        <div className={styles.TextDiv}>
          <div className="sf_c1_to_b1 gray400">{generation}th</div>
          <div className="sf_h3_to_h1">{title}</div>
        </div>
        <div className={styles.Icons}>
          {/* TODO(meainigood): instagram 없을 때 대응 필요 */}
          <IconInstagram link={getLandingURL('INSTAGRAM')} />
        </div>
      </div>
      <div className={styles.TagDiv}>
        {stacks.map((el, idx) => (
          <StackTag key={idx} label={el} font="sf_bd_to_c1" />
        ))}
      </div>
    </div>
  );
};

export default ModalTitle;
