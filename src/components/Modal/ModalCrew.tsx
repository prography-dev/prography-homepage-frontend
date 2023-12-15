import Image from 'next/image';
import styles from './ModalCrew.module.scss';

const ModalCrew = () => {
  return (
    <div className={styles.CrewWrapper}>
      <div className="sf_h3_to_h1">Crew</div>
      <div className={styles.Crews}>
        <div className={styles.CrewDiv}>
          <div className={styles.ImageCon}>
            <Image
              src="/assets/images/defaultPersonImage.png"
              alt="default"
              width={100}
              height={100}
              layout="responsive"
            />
          </div>
          <div className={`${styles.CrewName} pre_h6_to_h5`}>이유리</div>
          <div className={`${styles.CrewPart} pre_h6_to_h5 gray400`}>
            Designer
          </div>
        </div>
        <div className={styles.CrewDiv}>
          <div className={styles.ImageCon}>
            <Image
              src="/assets/images/defaultPersonImage.png"
              alt="default"
              width={100}
              height={100}
              layout="responsive"
            />
          </div>
          <div className={`${styles.CrewName} pre_h6_to_h5`}>이유리</div>
          <div className={`${styles.CrewPart} pre_h6_to_h5 gray400`}>
            Designer
          </div>
        </div>
        <div className={styles.CrewDiv}>
          <div className={styles.ImageCon}>
            <Image
              src="/assets/images/defaultPersonImage.png"
              alt="default"
              width={100}
              height={100}
              layout="responsive"
            />
          </div>
          <div className={`${styles.CrewName} pre_h6_to_h5`}>이유리</div>
          <div className={`${styles.CrewPart} pre_h6_to_h5 gray400`}>
            Designer
          </div>
        </div>
        <div className={styles.CrewDiv}>
          <div className={styles.ImageCon}>
            <Image
              src="/assets/images/defaultPersonImage.png"
              alt="default"
              width={100}
              height={100}
              layout="responsive"
            />
          </div>
          <div className={`${styles.CrewName} pre_h6_to_h5`}>이유리</div>
          <div className={`${styles.CrewPart} pre_h6_to_h5 gray400`}>
            Designer
          </div>
        </div>
        <div className={styles.CrewDiv}>
          <div className={styles.ImageCon}>
            <Image
              src="/assets/images/defaultPersonImage.png"
              alt="default"
              width={100}
              height={100}
              layout="responsive"
            />
          </div>
          <div className={`${styles.CrewName} pre_h6_to_h5`}>이유리</div>
          <div className={`${styles.CrewPart} pre_h6_to_h5 gray400`}>
            Designer
          </div>
        </div>
        <div className={styles.CrewDiv}>
          <div className={styles.ImageCon}>
            <Image
              src="/assets/images/defaultPersonImage.png"
              alt="default"
              width={100}
              height={100}
              layout="responsive"
            />
          </div>
          <div className={`${styles.CrewName} pre_h6_to_h5`}>이유리</div>
          <div className={`${styles.CrewPart} pre_h6_to_h5 gray400`}>
            Designer
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalCrew;
