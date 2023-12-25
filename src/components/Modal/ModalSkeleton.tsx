import styles from './ModalSkeleton.module.scss';

export const ModalTitleSkeleton = () => {
  return (
    <div className={styles.TitleSkeletonWrapper}>
      <div className={styles.Contents}>
        <div className={styles.TextDiv}>
          <div className={styles.GenerationSkeleton} />
          <div className={styles.TitleSkeleton} />
        </div>
        <div className={styles.IconsSkeleton} />
      </div>
      <div className={styles.TagDivSkeleton} />
    </div>
  );
};

export const ModalContentsSkeleton = () => {
  return (
    <>
      <div className={styles.ContentsDivSkeleton}>
        <div className={styles.ContentsDecriptionSkeleton} />
        <div className={styles.ContentsDecriptionSkeleton} />
        <div className={styles.ContentsDecriptionSkeleton} />
      </div>
      <div className={styles.ContentsImageSkeleton} />
    </>
  );
};

export const ModalCrewSkeleton = () => {
  return <div className={styles.CrewSkeleton} />;
};

const ModalSkeleton = () => {
  return (
    <div className={styles.ModalWrapper}>
      <ModalTitleSkeleton />
    </div>
  );
};

export default ModalSkeleton;
