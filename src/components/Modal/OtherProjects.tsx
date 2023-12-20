'use client';

import { useEffect, useState } from 'react';
import ProjectCardContainer from '../Project/ProjectCardContainer';
import styles from './OtherProjects.module.scss';
import { ProjectCardData } from '@/apis/project';
import Icon80RoundButton from '../common/icon/Icon80RoundButton';
import { isPcDevice, isTabletDevice } from '@/utils/device';

const itemsPerPage = {
  pc: 3,
  tablet: 2,
  mobile: 4,
};

interface OtherProjectsProps {
  currentTitle: string;
  onSelectOtherPjt: (selectedNewPjt: string) => void;
  onClick: () => void;
  otherProjects: ProjectCardData[];
}

const OtherProjects = ({
  currentTitle,
  onSelectOtherPjt,
  onClick,
  otherProjects,
}: OtherProjectsProps) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [projectData, setProjectData] =
    useState<ProjectCardData[]>(otherProjects);

  const handlePageChange = () => {
    setCurrentPage(currentPage + 1);
  };

  // 현재 열려있는 프로젝트 제외, Other Projects 배열
  useEffect(() => {
    const onCurrentProject = otherProjects.findIndex(
      el => el.title === currentTitle,
    );
    const updatedProjectData = [
      ...otherProjects.slice(0, onCurrentProject),
      ...otherProjects.slice(onCurrentProject + 1),
    ];
    setProjectData(updatedProjectData);
  }, []);

  const onSelectCard = (target: string) => {
    onSelectOtherPjt(target);
  };

  let pagenationCount: number;
  if (isPcDevice()) {
    pagenationCount = itemsPerPage.pc;
  } else if (isTabletDevice()) {
    pagenationCount = itemsPerPage.tablet;
  } else {
    pagenationCount = itemsPerPage.mobile;
  }

  const isAllProjects = pagenationCount * currentPage >= 11;

  return (
    <div className={styles.OtherPjtWrapper}>
      <div className="sf_h3_to_h1">Other projects</div>
      <ProjectCardContainer
        projects={projectData.slice(0, pagenationCount * currentPage)}
        onChange={onSelectCard}
        onClick={onClick}
      />
      <div
        className={`${styles.ArrowIconDiv} ${
          isAllProjects ? styles.Hidden : ''
        }`}
        onClick={handlePageChange}
      >
        <Icon80RoundButton />
      </div>
    </div>
  );
};

export default OtherProjects;
