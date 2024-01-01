'use client';

import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import { ProjectType, getProjectData } from '@/apis/project';

import { EMPTY_DATA } from '@/components/Project/PROJECT_DATA';
import Icon80RoundButton from '@/components/common/icon/Icon80RoundButton';
import Modal from '@/components/Modal/Modal';
import ProjectCardSkeleton from './ProjectCardSkeleton';
import styles from './ProjectComponents.module.scss';
import triggerGtm from '@/utils/triggerGtm';
import usePc from '@/hooks/usePc';
import useTablet from '@/hooks/useTablet';

const itemsPerPage = {
  pc: 9,
  tablet: 8,
  mobile: 4,
};

const ProjectCardContainer = dynamic(
  () => import('@/components/Project/ProjectCardContainer'),
  { ssr: false, loading: () => <ProjectCardSkeleton /> },
);

const ProjectComponents = () => {
  const isChangePc = usePc();
  const isChangeTablet = useTablet();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [projectData, setProjectData] = useState({
    projectDetail: EMPTY_DATA,
    projects: [] as ProjectType[],
    projectsLength: null as null | number,
  });
  const [pagenation, setPagenation] = useState({
    currentPage: 1,
    pagenationCount: 0,
  });

  const [currentTitle, setCurrentTitle] = useState('');

  useEffect(() => {
    getProjectData()
      .then(data => {
        setProjectData(prev => ({
          ...prev,
          projects: data,
          projectsLength: data.length,
        }));
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const onSelectCard = (target: string) => {
    const projectIdx = projectData.projects.findIndex(
      el => el.title === target,
    );
    setProjectData(prev => ({
      ...prev,
      projectDetail: projectData.projects[projectIdx],
    }));
    triggerGtm({
      event: 'project.project',
      device: isChangePc ? 'pc' : 'mobile',
      title: target,
    });
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
    setIsModalOpen(true);
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
    <>
      <div className={styles.PageTitle}>
        <div className="sf_h3_to_h1">Project</div>
        {projectData.projectsLength ? (
          <div className="sf_c1_to_b2 gray300">
            {projectData.projectsLength} Experiences in Prography
          </div>
        ) : (
          <div className="sf_c1_to_b2">&nbsp;</div>
        )}
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
        isOpen={isModalOpen}
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
    </>
  );
};

export default ProjectComponents;
