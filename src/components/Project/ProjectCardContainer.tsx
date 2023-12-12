import './ProjectCardContainer.scss';

import ProjectCard from './ProjectCard';
import { ProjectCardData } from '@/apis/project';

export interface ProjectCardContainerProps {
  projects: ProjectCardData[];
  onChange: (target: string) => void;
}

const ProjectCardContainer = ({
  projects,
  onChange,
}: ProjectCardContainerProps) => {
  const selectedCard = (target: string) => {
    onChange(target);
  };
  return (
    <div className="pjt-card-container">
      {projects.map(el => (
        <ProjectCard project={el} onChange={e => selectedCard(e)} />
      ))}
    </div>
  );
};

export default ProjectCardContainer;
