'use client';

import Image from 'next/image';
import { ProjectCardData } from '@/apis/project';
import StackTag from '../common/stackTag/StackTag';
import styles from './ProjectCard.module.scss';

export interface ProjectProps {
  project: Pick<
    ProjectCardData,
    'thumbnailUrl' | 'title' | 'generation' | 'stacks'
  >;
  onChange: (target: string) => void;
  onClick: () => void;
}

const ProjectCard = ({ project, onChange, onClick }: ProjectProps) => {
  const onClickCard = (e: React.MouseEvent<HTMLDivElement>) => {
    onChange(e.currentTarget.id);
    // TODO(meaningood): 구현 예정
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
          src={`${project.thumbnailUrl}`}
          alt="thumbnail"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className={styles.TextContainer}>
        <div className={styles.TitleDiv}>
          <span className={`sf_heading_5 ${styles.Title}`}>
            {project.title}
          </span>
          <span className={`sf_caption_1 gray400 ${styles.Nth}`}>
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
