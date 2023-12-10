import './ProjectCard.scss';

import Image from 'next/image';

const ProjectCard = () => {
  return (
    <div className="card-container">
      <div className="image-container">
        <Image
          width={345}
          height={430}
          src="/assets/images/cat.jpg"
          alt="thumbnail"
        />
      </div>
      <div className="text-container">
        <div className="title-div">
          <span className="sf_heading_5 title">I GO BOSS</span>
          <span className="sf_caption_1 gray400 nth">8th</span>
        </div>
        <div className="tag-div">
          <SkillTags label="JAVA" />
          <SkillTags label="iOS" />
          <SkillTags label="Gradle" />
          <SkillTags label="Design" />
          <SkillTags label="Spring Boot" />
        </div>
      </div>
    </div>
  );
};

export const SkillTags = ({ label }: { label: string }) => {
  return <div className="skill-tag">{label}</div>;
};

export default ProjectCard;
