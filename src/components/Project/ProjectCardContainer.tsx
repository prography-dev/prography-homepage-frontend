import './ProjectCardContainer.scss';

import ProjectCard from './ProjectCard';

import { ProjectCardData } from '@/apis/project';

export interface ProjectCardContainerProps {
  projects: ProjectCardData[];
}

const ProjectCardContainer = ({ projects }: ProjectCardContainerProps) => {
  return (
    <div className="pjt-card-container">
      {projects.map(el => (
        <ProjectCard project={el} />
      ))}
    </div>
  );
};

export default ProjectCardContainer;
