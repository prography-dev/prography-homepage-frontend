import 'swiper/css';
import './Project.scss';

import { useState, useEffect } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

import { ProjectCardData } from '@/apis/project';
import { EMPTY_DATA, PROJECT_DATA } from '@/components/Project/PROJECT_DATA';
import Modal from '@/components/Modal/Modal';
import usePc from '@/hooks/usePc';

import ProjectCard from './ProjectCard';

const Project = () => {
  const MAX_PROJECT_CARD = 9;

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [projectDetail, setProjectDetail] =
    useState<ProjectCardData>(EMPTY_DATA);
  const [currentTitle, setCurrentTitle] = useState('');

  useEffect(() => {
    if (currentTitle === '') return;

    const projectIdx = PROJECT_DATA.findIndex(el => el.title === currentTitle);
    setProjectDetail(PROJECT_DATA[projectIdx]);
    setIsModalOpen(true);
  }, [currentTitle]);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const onClickPjtInModal = (target: string) => {
    setCurrentTitle(target);
  };

  const onSelectCard = (target: string) => {
    const projectIdx = PROJECT_DATA.findIndex(el => el.title === target);
    setProjectDetail(PROJECT_DATA[projectIdx]);
  };

  const mobileSwiperOptions = {
    speed: 1000,
    spaceBetween: 12,
    autoplay: false,
  };
  const pcSwiperOptions = {
    speed: 3000,
    autoplay: {
      delay: 1,
    },
    spaceBetween: 16,
    modules: [Autoplay],
  };
  const swiperOptions = usePc() ? pcSwiperOptions : mobileSwiperOptions;

  return (
    <>
      <Swiper {...swiperOptions} slidesPerView="auto" loop={true}>
        {PROJECT_DATA.slice(0, MAX_PROJECT_CARD).map(
          ({ id, title, generation, thumbnailUrl }, idx) => (
            <SwiperSlide key={id + idx}>
              <ProjectCard
                title={title}
                generation={generation}
                thumbnailUrl={thumbnailUrl}
                onChange={onSelectCard}
                onClick={openModal}
              />
            </SwiperSlide>
          ),
        )}
      </Swiper>
      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        data={projectDetail}
        onClickPjtInModal={onClickPjtInModal}
        otherProjects={PROJECT_DATA}
      />
    </>
  );
};

export default Project;
