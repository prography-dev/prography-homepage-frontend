'use client';

import { useEffect, useState } from 'react';
import ProjectCardContainer from '../Project/ProjectCardContainer';
import styles from './OtherProjects.module.scss';
import { ProjectCardData } from '@/apis/project';
import Icon80RoundButton from '../common/icon/Icon80RoundButton';
import { isPhoneDevice } from '@/utils/device';
import Icon64PageButton from '../common/icon/Icon64PageButton';

const itemsPerPage = {
  pc: 3,
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
  const isMobile = isPhoneDevice();

  const [currentPage, setCurrentPage] = useState(1);
  const [projectData, setProjectData] =
    useState<ProjectCardData[]>(otherProjects);

  let pagenationCount: number;

  if (isMobile) {
    pagenationCount = itemsPerPage.mobile;
  } else {
    pagenationCount = itemsPerPage.pc;
  }

  const isAllProjects = pagenationCount * currentPage >= 11;

  const lastPageNumber = Math.ceil(otherProjects.length / pagenationCount) ?? 0;
  const totalPage = Array.from({ length: lastPageNumber }, (_, i) => i + 1);

  const handlePageCountUp = () => {
    setCurrentPage(currentPage + 1);
  };

  const handlePageCountDown = () => {
    setCurrentPage(currentPage - 1);
  };

  const handleNumberPageChange = (target: number) => {
    setCurrentPage(target);
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

  return (
    <div className={styles.OtherPjtWrapper}>
      <div className="sf_h3_to_h1">Other projects</div>

      {isMobile ? (
        <>
          <ProjectCardContainer
            projects={projectData.slice(0, pagenationCount * currentPage)}
            onChange={onSelectCard}
            onClick={onClick}
          />

          <div
            className={`${styles.ArrowIconDiv} ${
              isAllProjects ? styles.Hidden : ''
            }`}
            onClick={handlePageCountUp}
          >
            <Icon80RoundButton />
          </div>
        </>
      ) : (
        <>
          <ProjectCardContainer
            projects={projectData.slice(
              (currentPage - 1) * pagenationCount,
              currentPage * pagenationCount,
            )}
            onChange={onSelectCard}
            onClick={onClick}
          />
          <div className={styles.PagenationDiv}>
            <div
              className={`${
                currentPage === 1
                  ? styles.NumberButtonDisabled
                  : styles.NumberButtonDiv
              }`}
              onClick={handlePageCountDown}
            >
              <Icon64PageButton />
            </div>
            {totalPage.map(el => (
              <div
                key={el}
                className={`${styles.PageNumber} ${
                  el === currentPage ? styles.PageNumberActive : ''
                } gray600 pre_body_2`}
                onClick={() => handleNumberPageChange(el)}
              >
                {el}
              </div>
            ))}
            <div
              className={`${
                currentPage === lastPageNumber
                  ? styles.NumberButtonDisabled
                  : styles.NumberButtonDiv
              }`}
              onClick={handlePageCountUp}
            >
              <Icon64PageButton rotate={180} />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default OtherProjects;
