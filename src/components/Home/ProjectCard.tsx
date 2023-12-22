import Image from 'next/image';
import styles from './ProjectCard.module.scss';

import formatGeneration from '@/utils/formatGeneration';

interface ProjectCardProps {
  title: string;
  generation: number;
  thumbnailUrl: string;
  onChange: (target: string) => void;
  onClick: () => void;
}

const ProjectCard = ({
  title,
  generation,
  thumbnailUrl,
  onChange,
  onClick,
}: ProjectCardProps) => {
  const onClickCard = (e: React.MouseEvent<HTMLDivElement>) => {
    onChange(e.currentTarget.id);
    onClick();
  };

  return (
    <div
      className={styles.PgHomeProjectWrapper}
      onClick={onClickCard}
      id={title}
    >
      <Image
        className={styles.PgHomeProjectImage}
        width={280}
        height={344}
        src={thumbnailUrl}
        alt="thumbnail"
        objectFit="cover"
      />
      <div className={styles.PgHomeProjectText}>
        <span className={styles.PgHomeProjectTitle}>{title}</span>
        <span className={styles.PgHomeProjectGeneration}>
          {formatGeneration(generation)}
        </span>
      </div>
    </div>
  );
};

export default ProjectCard;
