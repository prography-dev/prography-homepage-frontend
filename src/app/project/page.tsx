'use client';

import './page.scss';

import React, { useState } from 'react';

import CommonWrapper from '@/components/common/layout/CommonWrapper';
import Icon80RoundButton from '@/components/common/icon/Icon80RoundButton';
import Modal from '@/components/Project/Modal';
import { PROJECT_DATA } from '@/components/Project/PROJECT_DATA';
import ProjectCardContainer from '@/components/Project/ProjectCardContainer';

const Project = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <CommonWrapper>
      <div className="page-title">
        <div className="sf_heading_1">Project</div>
        <div className="sf_body_2">12 Experiences in Prography</div>
      </div>
      <ProjectCardContainer projects={PROJECT_DATA} />

      <button type="button" onClick={openModal}>
        Open Modal
      </button>

      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <p className="black">모달모달</p>
        <p className="black">내용입력하기</p>
      </Modal>
      <div className="arrow-icon-div">
        <Icon80RoundButton />
      </div>
    </CommonWrapper>
  );
};

export default Project;
