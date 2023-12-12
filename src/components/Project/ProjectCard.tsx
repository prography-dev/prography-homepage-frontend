import './ProjectCard.scss';

import Image from 'next/image';
import { PROJECT_DATA } from './PROJECT_DATA';

export interface ProjectProps {
  projects: {
    id: number;
    title: string;
    description: string;
    generation: number;
    thumbnailUrl: string;
    imageUrl: string;
    stacks: string[];
    users: {
      id: number;
      name: string;
      part: string;
    }[];
    socials: {
      type: string;
      landingUrl: string;
    }[];
  }[];
}

const ProjectCard: React.FC = () => {
  return (
    <div className="card-container">
      <div className="image-container">
        <Image
          src="/assets/images/cat.jpg"
          alt="thumbnail"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="text-container">
        <div className="title-div">
          <span className="sf_heading_5 title">
            {PROJECT_DATA.projects[0].title}
          </span>
          <span className="sf_caption_1 gray400 nth">
            {PROJECT_DATA.projects[0].generation}th
          </span>
        </div>
        <div className="tag-div">
          {PROJECT_DATA.projects[0].stacks.map((el, idx) => (
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
