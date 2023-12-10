'use client';

import './page.scss';

import React, { useEffect, useState } from 'react';

import CommonWrapper from '@/components/common/layout/CommonWrapper';
import Modal from '@/components/Project/Modal';
import ProjectCardContainer from '@/components/Project/ProjectCardContainer';

const Project = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [prevUrl, setPrevUrl] = useState('');

  const openModal = () => {
    // 모달이 열릴 때 현재 URL을 기억
    setPrevUrl(window.location.href);
    // 모달을 열고 URL 변경
    setIsModalOpen(true);
    window.history.pushState(
      { path: `/project/project-1` },
      '',
      `/project/project-1`,
    );
  };

  const closeModal = () => {
    // 모달을 닫고 이전 URL로 돌아가기
    setIsModalOpen(false);
    window.history.pushState({ path: prevUrl }, '', prevUrl);
  };

  // 모달이 닫힐 때 이전 URL로 돌아가기 위한 useEffect
  useEffect(() => {
    const handlePopState = () => {
      if (isModalOpen) {
        setIsModalOpen(false);
      }
    };

    window.addEventListener('popstate', handlePopState);

    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, [isModalOpen]);

  return (
    <CommonWrapper>
      <div className="page-title">
        <div className="sf_heading_1">Project</div>
        <div className="sf_body_2">12 Experiences in Prography</div>
      </div>
      <ProjectCardContainer />

      {/* 프로젝트-1 페이지로 이동하는 링크 */}
      <a href="/project/project-1">project-1</a>
      <br />

      {/* 모달 열기 버튼 */}
      <button type="button" onClick={openModal}>
        Open Modal
      </button>

      {/* 모달 */}
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <p>This is the content of the modal.</p>
        <p>You can put any content or components here.</p>
      </Modal>
    </CommonWrapper>
  );
};

export default Project;
