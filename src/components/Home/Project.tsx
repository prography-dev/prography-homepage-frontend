'use client';

import 'swiper/css';
import './Project.scss';

import { Swiper, SwiperSlide } from 'swiper/react';
import { useEffect, useState } from 'react';
import { Autoplay } from 'swiper/modules';

import ProjectCard from './ProjectCard';

import { EMPTY_DATA } from '@/components/Project/PROJECT_DATA';
import Modal from '@/components/Modal/Modal';

import { getProjectData, ProjectCardData } from '@/apis/project';
import usePc from '@/hooks/usePc';

const Project = () => {
  const MAX_PROJECT_CARD = 9;

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [projectDetail, setProjectDetail] =
    useState<ProjectCardData>(EMPTY_DATA);
  const [projectList, setProjectList] = useState<ProjectCardData[]>([]);
  const [currentTitle, setCurrentTitle] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const data = await getProjectData();
      setProjectList(data);
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (currentTitle === '') return;

    const projectIdx = projectList.findIndex(el => el.title === currentTitle);
    setProjectDetail(projectList[projectIdx]);
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
    const projectIdx = projectList.findIndex(el => el.title === target);

    setProjectDetail(projectList[projectIdx]);
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
      <Swiper
        {...swiperOptions}
        slidesPerView="auto"
        loop={true}
        loopAddBlankSlides={true}
        loopAdditionalSlides={1}
      >
        {projectList
          .slice(0, MAX_PROJECT_CARD)
          .map(({ id, title, generation, thumbnailImageUrl }, idx) => (
            <SwiperSlide key={id + idx}>
              <ProjectCard
                title={title}
                generation={generation}
                thumbnailImageUrl={thumbnailImageUrl}
                onChange={onSelectCard}
                onClick={openModal}
              />
            </SwiperSlide>
          ))}
      </Swiper>
      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        data={projectDetail}
        onClickPjtInModal={onClickPjtInModal}
        otherProjects={projectList}
      />
    </>
  );
};

export default Project;
