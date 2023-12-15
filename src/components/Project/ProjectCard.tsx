'use client';

import './ProjectCard.scss';

import Image from 'next/image';
import { ProjectCardData } from '@/apis/project';
import StackTag from '../common/stackTag/StackTag';

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
    <div className="card-container" id={project.title} onClick={onClickCard}>
      <div className="image-container">
        <Image
          src={`${project.thumbnailUrl}`}
          alt="thumbnail"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="text-container">
        <div className="title-div">
          <span className="sf_heading_5 title">{project.title}</span>
          <span className="sf_caption_1 gray400 nth">
            {project.generation}th
          </span>
        </div>
        <div className="tag-div">
          {project.stacks.map((el, idx) => (
            <StackTag key={idx} label={el} font="sf_badge" />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
