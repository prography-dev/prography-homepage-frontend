'use client';

import React, { useEffect, useState } from 'react';
import { EMPTY_DATA, PROJECT_DATA } from '@/components/Project/PROJECT_DATA';
import { isPcDevice, isTabletDevice } from '@/utils/device';

import CommonWrapper from '@/components/common/layout/CommonWrapper';
import Icon80RoundButton from '@/components/common/icon/Icon80RoundButton';
import Modal from '@/components/Modal/Modal';
import ProjectCardContainer from '@/components/Project/ProjectCardContainer';
import { ProjectCardData } from '@/apis/project';
import styles from './page.module.scss';

const itemsPerPage = {
  pc: 9,
  tablet: 8,
  mobile: 4,
};

const Page = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [projectDetail, setProjectDetail] =
    useState<ProjectCardData>(EMPTY_DATA);
  const [currentPage, setCurrentPage] = useState(1);
  const [currentTitle, setCurrentTitle] = useState('');

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const onSelectCard = (target: string) => {
    const projectIdx = PROJECT_DATA.findIndex(el => el.title === target);
    setProjectDetail(PROJECT_DATA[projectIdx]);
  };

  const handlePageChange = () => {
    setCurrentPage(currentPage + 1);
  };

  const onClickPjtInModal = (target: string) => {
    setCurrentTitle(target);
  };

  useEffect(() => {
    if (currentTitle === '') return;

    const projectIdx = PROJECT_DATA.findIndex(el => el.title === currentTitle);
    setProjectDetail(PROJECT_DATA[projectIdx]);
    setIsModalOpen(true);
  }, [currentTitle]);

  let pagenationCount: number;
  if (isPcDevice()) {
    pagenationCount = itemsPerPage.pc;
  } else if (isTabletDevice()) {
    pagenationCount = itemsPerPage.tablet;
  } else {
    pagenationCount = itemsPerPage.mobile;
  }

  const isAllProjects = pagenationCount * currentPage >= 12;

  return (
    <CommonWrapper>
      <div className={styles.PageTitle}>
        <div className="sf_heading_1">Project</div>
        <div className="sf_body_2">12 Experiences in Prography</div>
      </div>
      <ProjectCardContainer
        projects={PROJECT_DATA.slice(0, pagenationCount * currentPage)}
        onChange={onSelectCard}
        onClick={openModal}
      />

      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        data={projectDetail}
        onClickPjtInModal={onClickPjtInModal}
      />
      <div
        className={`${styles.ArrowIconDiv} ${
          isAllProjects ? styles.Hidden : ''
        }`}
        onClick={handlePageChange}
      >
        <Icon80RoundButton />
      </div>
    </CommonWrapper>
  );
};

export default Page;
