'use client';

import React, { useEffect, useState } from 'react';

import dynamic from 'next/dynamic';
import CommonWrapper from '@/components/common/layout/CommonWrapper';
import { EMPTY_DATA } from '@/components/Project/PROJECT_DATA';
import Icon80RoundButton from '@/components/common/icon/Icon80RoundButton';
import Modal from '@/components/Modal/Modal';
import { getProjectData } from '@/apis/project';
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
  const isChangePc = usePc();
  const isChangeTablet = useTablet();

  const [booleanState, setBooleanState] = useState({
    isModalOpen: false,
    isLoading: true,
  });
  const [projectData, setProjectData] = useState({
    projectDetail: EMPTY_DATA,
    projects: [EMPTY_DATA],
  });
  const [pagenation, setPagenation] = useState({
    currentPage: 1,
    pagenationCount: 0,
  });
  const [currentTitle, setCurrentTitle] = useState('');

  useEffect(() => {
    getProjectData()
      .then(data => {
        setProjectData(prev => ({ ...prev, projects: data }));
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
    setBooleanState(prev => ({ ...prev, isLoading: false }));
  }, []);

  const openModal = () => {
    setBooleanState(prev => ({ ...prev, isModalOpen: true }));
  };

  const closeModal = () => {
    setBooleanState(prev => ({ ...prev, isModalOpen: false }));
  };

  const onSelectCard = (target: string) => {
    const projectIdx = projectData.projects.findIndex(
      el => el.title === target,
    );
    setProjectData(prev => ({
      ...prev,
      projectDetail: projectData.projects[projectIdx],
    }));
  };

  const handlePageChange = () => {
    setPagenation(prev => ({ ...prev, currentPage: prev.currentPage + 1 }));
  };

  const onClickPjtInModal = (target: string) => {
    setCurrentTitle(target);
  };

  useEffect(() => {
    if (currentTitle === '') return;

    const projectIdx = projectData.projects.findIndex(
      el => el.title === currentTitle,
    );
    setProjectData(prev => ({
      ...prev,
      projectDetail: projectData.projects[projectIdx],
    }));
    setBooleanState(prev => ({ ...prev, isModalOpen: true }));
  }, [currentTitle]);

  useEffect(() => {
    if (isChangePc) {
      setPagenation(prev => ({ ...prev, pagenationCount: itemsPerPage.pc }));
    } else if (isChangeTablet) {
      setPagenation(prev => ({
        ...prev,
        pagenationCount: itemsPerPage.tablet,
      }));
    } else {
      setPagenation(prev => ({
        ...prev,
        pagenationCount: itemsPerPage.mobile,
      }));
    }
    setPagenation(prev => ({ ...prev, currentPage: 1 }));
  }, [isChangeTablet, isChangePc]);

  const isAllProjects =
    pagenation.pagenationCount * pagenation.currentPage >= 12;

  return (
    <CommonWrapper>
      <div className={styles.PageTitle}>
        <div className="sf_h3_to_h1">Project</div>
        <div className="sf_c1_to_b2 gray300">12 Experiences in Prography</div>
      </div>

        <ProjectCardContainer
          projects={projectData.projects.slice(
            0,
            pagenation.pagenationCount * pagenation.currentPage,
          )}
          onChange={onSelectCard}
          onClick={openModal}
        />

      <Modal
        isOpen={booleanState.isModalOpen}
        onClose={closeModal}
        data={projectData.projectDetail}
        onClickPjtInModal={onClickPjtInModal}
        otherProjects={projectData.projects}
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
