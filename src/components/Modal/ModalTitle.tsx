import { ModalTitleSkeleton } from './ModalSkeleton';
import { ProjectType } from '@/apis/project';
import StackTag from '../common/stackTag/StackTag';
import { getIconToUrl } from '../common/icon/getIconToUrl';
import styles from './ModalTitle.module.scss';

interface ModalTitleProps
  extends Pick<ProjectType, 'generation' | 'title' | 'stacks' | 'socials'> {
  isLoading: boolean;
}

const ModalTitle = ({
  generation,
  title,
  stacks,
  socials,
  isLoading,
}: ModalTitleProps) => {
  return (
    <div className={styles.TitleWrapper}>
      {isLoading ? (
        <ModalTitleSkeleton />
      ) : (
        <>
          <div className={styles.Contents}>
            <div className={styles.TextDiv}>
              <div className="sf_c1_to_b1 gray400">{generation}th</div>
              <div className={`${styles.Title} sf_h3_to_h1`}>{title}</div>
            </div>
            <div className={styles.Icons}>
              {socials.map((el, idx) =>
                getIconToUrl({
                  type: el.type,
                  landingUrl: el.landingUrl,
                  key: idx,
                }),
              )}
            </div>
          </div>
          <div className={styles.TagDiv}>
            {stacks.map((el, idx) => (
              <StackTag key={idx} label={el} font="sf_bd_to_c1" />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default ModalTitle;
