'use client';

import './page.scss';

import React, { useState } from 'react';
import { EMPTY_DATA, PROJECT_DATA } from '@/components/Project/PROJECT_DATA';

import CommonWrapper from '@/components/common/layout/CommonWrapper';
import Icon80RoundButton from '@/components/common/icon/Icon80RoundButton';
import Modal from '@/components/Modal/Modal';
import ProjectCardContainer from '@/components/Project/ProjectCardContainer';
import { ProjectCardData } from '@/apis/project';

const Page = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [projectDetail, setProjectDetail] =
    useState<ProjectCardData>(EMPTY_DATA);

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

  return (
    <CommonWrapper>
      <div className="page-title">
        <div className="sf_heading_1">Project</div>
        <div className="sf_body_2">12 Experiences in Prography</div>
      </div>
      <ProjectCardContainer
        projects={PROJECT_DATA}
        onChange={onSelectCard}
        onClick={openModal}
      />

      <Modal isOpen={isModalOpen} onClose={closeModal} data={projectDetail} />
      <div className="arrow-icon-div">
        <Icon80RoundButton />
      </div>
    </CommonWrapper>
  );
};

export default Page;
