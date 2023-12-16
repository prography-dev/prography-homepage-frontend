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
<<<<<<< HEAD
    <div className={styles.PjtCardContainer}>
=======
    <div className="pjt-card-container">
>>>>>>> parent of 5be6d60 (🔨 scss module 추가....)
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
