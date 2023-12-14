import './ProjectCardContainer.scss';

import ProjectCard from './ProjectCard';
import { ProjectCardData } from '@/apis/project';

export interface ProjectCardContainerProps {
  projects: ProjectCardData[];
  onChange: (target: string) => void;
  onClick: () => void;
}

const ProjectCardContainer = ({
  projects,
  onChange,
  onClick,
}: ProjectCardContainerProps) => {
  const selectedCard = (target: string) => {
    onChange(target);
  };
  return (
    <div className="pjt-card-container">
      {projects.map((el, idx) => (
        <ProjectCard
          key={idx}
          project={el}
          onChange={selectedCard}
          onClick={onClick}
        />
      ))}
    </div>
  );
};

export default ProjectCardContainer;
