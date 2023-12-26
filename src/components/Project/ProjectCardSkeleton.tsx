import styles from './ProjectCardSkeleton.module.scss';

export const ProjectSkeleton = () => {
  return (
    <div className={styles.CardContainerSkeleton}>
      <div className={styles.ImageContainerSkeleton} />
      <div className={styles.TextContainer}>
        <div className={styles.TitleDivSkeleton} />
        <div className={styles.TagDivSkeleton} />
      </div>
    </div>
  );
};

const ProjectCardSkeleton = () => {
  return (
    <div className={styles.PjtCardContainerSkeleton}>
      {Array.from({ length: 9 }).map((_, index) => (
        <ProjectSkeleton key={index} />
      ))}
    </div>
  );
};

export default ProjectCardSkeleton;
