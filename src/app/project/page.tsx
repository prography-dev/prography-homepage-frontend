/* eslint-disable jsx-a11y/no-static-element-interactions */

'use client';

import React, { useEffect, useState } from 'react';

const Modal = ({ isOpen, onClose, children }) => {
  return (
    <>
      {isOpen && (
        // eslint-disable-next-line jsx-a11y/no-static-element-interactions
        <div className="modal-overlay" onClick={onClose}>
          <div className="modal" onClick={e => e.stopPropagation()}>
            <button type="button" className="close-button" onClick={onClose}>
              Close
            </button>
            {children}
          </div>
        </div>
      )}
      <style>{`
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.5);
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .modal {
          background: white;
          padding: 20px;
          border-radius: 8px;
        }

        .close-button {
          background: #ffcad6;
          border: none;
          padding: 8px 16px;
          cursor: pointer;
        }
      `}</style>
    </>
  );
};

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
    <div style={{ backgroundColor: '#FFCAD6' }}>
      <h1>Project</h1>

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
    </div>
  );
};

export default Project;
