'use client';

import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import { EMPTY_DATA, PROJECT_DATA } from '@/components/Project/PROJECT_DATA';
import { isPcDevice, isTabletDevice } from '@/utils/device';

import CommonWrapper from '@/components/common/layout/CommonWrapper';
import Icon80RoundButton from '@/components/common/icon/Icon80RoundButton';
import Modal from '@/components/Modal/Modal';
import { ProjectCardData } from '@/apis/project';
import styles from './page.module.scss';
import usePc from '@/hooks/usePc';
import useTablet from '@/hooks/useTablet';

const itemsPerPage = {
  pc: 9,
  tablet: 8,
  mobile: 4,
};

const ProjectCardContainer = dynamic(
  () => import('@/components/Project/ProjectCardContainer'),
  { ssr: false },
);

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

  const isChangeTablet = useTablet();
  const isChangePc = usePc();

  useEffect(() => {
    if (isChangePc) {
      pagenationCount = itemsPerPage.pc;
    } else if (isChangeTablet) {
      pagenationCount = itemsPerPage.tablet;
    } else {
      pagenationCount = itemsPerPage.mobile;
    }
    setCurrentPage(1);
  }, [isChangeTablet, isChangePc]);

  const isAllProjects = pagenationCount * currentPage >= 12;

  return (
    <CommonWrapper>
      <div className={styles.PageTitle}>
        <div className="sf_h3_to_h1">Project</div>
        <div className="sf_c1_to_b2 gray300">12 Experiences in Prography</div>
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
        otherProjects={PROJECT_DATA}
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
