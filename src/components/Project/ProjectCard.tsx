'use client';

import './ProjectCard.scss';

import Image from 'next/image';
import { ProjectCardData } from '@/apis/project';

export interface ProjectProps {
  project: Pick<
    ProjectCardData,
    'thumbnailUrl' | 'title' | 'generation' | 'stacks'
  >;
  onChange: (target: string) => void;
}

const ProjectCard = ({ project, onChange }: ProjectProps) => {
  const onClickCard = (e: React.MouseEvent<HTMLDivElement>) => {
    onChange(e.currentTarget.id);
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
            <SkillTags key={idx} label={el} />
          ))}
        </div>
      </div>
    </div>
  );
};

const SkillTags = ({ label }: { label: string }) => {
  return <div className="skill-tag sf_badge">{label}</div>;
};

export default ProjectCard;
