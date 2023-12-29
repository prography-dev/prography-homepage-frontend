'use client';

import Image from 'next/image';
import { ProjectType } from '@/apis/project';
import StackTag from '../common/stackTag/StackTag';
import styles from './ProjectCard.module.scss';

export interface ProjectProps {
  project: Pick<
    ProjectType,
    'thumbnailImageUrl' | 'title' | 'generation' | 'stacks'
  >;
  onChange: (target: string) => void;
  onClick: () => void;
}

const ProjectCard = ({ project, onChange, onClick }: ProjectProps) => {
  const onClickCard = (e: React.MouseEvent<HTMLDivElement>) => {
    onChange(e.currentTarget.id);
    onClick();
  };

  return (
    <div
      className={styles.CardContainer}
      id={project.title}
      onClick={onClickCard}
    >
      <div className={styles.ImageContainer}>
        <Image
          src={`${project.thumbnailImageUrl}`}
          alt="thumbnail"
          width={345}
          height={430}
          style={{
            objectFit: 'fill',
            width: '100%',
          }}
        />
      </div>
      <div className={styles.TextContainer}>
        <div className={styles.TitleDiv}>
          <span className={`${styles.Title} sf_heading_5`}>
            {project.title}
          </span>
          <span className={`${styles.Nth} sf_bd_to_c1 gray400`}>
            {project.generation}th
          </span>
        </div>
        <div className={styles.TagDiv}>
          {project.stacks.map((el, idx) => (
            <StackTag key={idx} label={el} font="sf_badge" />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
