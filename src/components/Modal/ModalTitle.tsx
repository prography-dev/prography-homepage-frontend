import { IconInstagram } from '../common/icon';

import { ProjectCardData } from '@/apis/project';
import StackTag from '../common/stackTag/StackTag';
import styles from './ModalTitle.module.scss';

const ModalTitle = ({
  generation,
  title,
  stacks,
}: Pick<ProjectCardData, 'generation' | 'title' | 'stacks'>) => {
  return (
    <div className={styles.TitleWrapper}>
      <div className={styles.Contents}>
        <div className={styles.TextDiv}>
          <div className="sf_c1_to_b1 gray400">{generation}th</div>
          <div className="sf_h3_to_h1">{title}</div>
        </div>
        <div className={styles.Icons}>
          <IconInstagram />
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
