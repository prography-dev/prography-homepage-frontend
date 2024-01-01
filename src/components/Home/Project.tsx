'use client';

import 'swiper/css';
import './Project.scss';

import { Swiper, SwiperSlide } from 'swiper/react';
import { useEffect, useState } from 'react';

import { Autoplay } from 'swiper/modules';
import { ProjectType, getProjectData } from '@/apis/project';
import { EMPTY_DATA } from '@/components/Project/PROJECT_DATA';
import Modal from '@/components/Modal/Modal';
import ProjectCard from './ProjectCard';
import usePc from '@/hooks/usePc';
import triggerGtm from '@/utils/triggerGtm';

const Project = () => {
  const MAX_PROJECT_CARD = 9;
  const isPc = usePc();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [projectDetail, setProjectDetail] = useState<ProjectType>(EMPTY_DATA);
  const [projectList, setProjectList] = useState<ProjectType[]>([]);
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

  const openModal = (title: string, generation: number) => {
    setIsModalOpen(true);
    triggerGtm({
      event: 'home.project.slider',
      projectTitle: title,
      device: isPc ? 'pc' : 'mobile',
      generation,
    });
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
      delay: 1000,
    },
    spaceBetween: 16,
    modules: [Autoplay],
  };
  const swiperOptions = isPc ? pcSwiperOptions : mobileSwiperOptions;

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
                onClick={() => openModal(title, generation)}
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
