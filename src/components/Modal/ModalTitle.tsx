import { IconBehance, IconInstagram } from '../common/icon';

import StackTag from '../common/stackTag/StackTag';
import styles from './ModalTitle.module.scss';

const ModalTitle = () => {
  return (
    <div className={styles.TitleWrapper}>
      <div className={styles.Contents}>
        <div className={styles.TextDiv}>
          <div className="sf_c1_to_b1 gray400">9th</div>
          <div className="sf_h3_to_h1">FREITAG</div>
        </div>
        <div className={styles.Icons}>
          <IconInstagram />
          <IconBehance />
        </div>
      </div>
      <div className={styles.TagDiv}>
        <StackTag label="JAVA" font="sf_bd_to_c1" />
        <StackTag label="JAVA" font="sf_bd_to_c1" />
        <StackTag label="JAVA" font="sf_bd_to_c1" />
      </div>
    </div>
  );
};

export default ModalTitle;
