import 'swiper/css';
import './Project.scss';

import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Autoplay } from 'swiper/modules';

import { PROJECT_DATA } from '@/components/Project/PROJECT_DATA';
import isPcDevice from '@/utils/isPcDevice';
import ProjectCard from './ProjectCard';

const Project = () => {
  const mobileSwiperOptions = {
    speed: 1000,
    spaceBetween: 12,
  };
  const pcSwiperOptions = {
    freeMode: true,
    speed: 3000,
    autoplay: {
      delay: 1,
      waitForTransition: true,
      stopOnLastSlide: false,
    },
    spaceBetween: 16,
    modules: [Autoplay, FreeMode],
  };
  const swiperOptions = isPcDevice() ? pcSwiperOptions : mobileSwiperOptions;

  return (
    <Swiper {...swiperOptions} slidesPerView="auto" loop={true}>
      {PROJECT_DATA.map(({ id, title, generation, thumbnailUrl }, idx) => (
        <SwiperSlide key={id + idx}>
          <ProjectCard
            title={title}
            generation={generation}
            thumbnailUrl={thumbnailUrl}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Project;
