'use client';

import React, { useState } from 'react';

import CommonWrapper from '@/components/common/layout/CommonWrapper';
import Icon80RoundButton from '@/components/common/icon/Icon80RoundButton';
import Modal from '@/components/Modal/Modal';
import { PROJECT_DATA } from '@/components/Project/PROJECT_DATA';
import ProjectCardContainer from '@/components/Project/ProjectCardContainer';
import styles from './page.module.scss';

const Page = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState('');

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const onSelectCard = (target: string) => {
    setSelectedCard(target);
  };

  return (
    <CommonWrapper>
      <div className={styles.PageTitle}>
        <div className="sf_heading_1">Project</div>
        <div className="sf_body_2">12 Experiences in Prography</div>
      </div>
      <ProjectCardContainer
        projects={PROJECT_DATA}
        onChange={e => onSelectCard(e)}
        onClick={openModal}
      />

      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        selectedCard={selectedCard}
      />
      <div className={styles.ArrowIconDiv}>
        <Icon80RoundButton />
      </div>
    </CommonWrapper>
  );
};

export default Page;
