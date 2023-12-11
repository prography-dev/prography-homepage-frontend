import { ProjectProps } from './ProjectCard';

// 더미데이터
export const PROJECT_DATA: ProjectProps = {
  projects: [
    {
      id: 1,
      title: 'I GO BOSS',
      description: '둥다리당당저녁뭐먹지',
      generation: 8,
      thumbnailUrl:
        'https://mblogthumb-phinf.pstatic.net/MjAyMjAxMjVfMjMy/MDAxNjQzMTAyOTg1NzI0.bkW6TJVG82Gi8uG643n5SaSTYOyEcNAq0Y7xsEkOBSUg.rU7SY3uYHJGnigm3WzvBk0LkXt_cO6UOyVsfeKxbEPAg.JPEG.minziminzi128/IMG_7370.JPG?type=w800',
      imageUrl: 'https://image.com',
      stacks: ['Java', 'React', 'iOS', 'AOS', 'Design', 'Gradle'],
      users: [
        {
          id: 123,
          name: '문범우',
          part: 'Designer',
        },
        {
          id: 125,
          name: '강민성',
          part: 'Android',
        },
      ],

      socials: [
        {
          type: 'INSTAGRAM',
          landingUrl: 'https://hi.com',
        },
      ],
    },
    {
      id: 2,
      title: '둥둥',
      description: '나갈까',
      generation: 7,
      thumbnailUrl:
        'https://mblogthumb-phinf.pstatic.net/MjAyMjAxMjVfMjg0/MDAxNjQzMTAyOTg0Nzgz.sLrqOJ2S3r6pLboUm5yJTjB_JECC0zO9Tt3y_h86aJcg.w5VER_KDRAW3yRq8-nypsm2aGmKurM5YieSFcr1Vg0Qg.JPEG.minziminzi128/IMG_7374.JPG?type=w800',
      imageUrl: 'https://image.com',
      stacks: [
        'Java',
        'React',
        'Spring Boot',
        'MySQL',
        'AWS EC2',
        'Type Script',
      ],
      users: [
        {
          id: 1,
          name: '또범우',
          part: 'Designer',
        },
        {
          id: 222,
          name: '또민성',
          part: 'Android',
        },
      ],
      socials: [
        {
          type: 'INSTAGRAM',
          landingUrl: 'https://hi.com',
        },
      ],
    },
  ],
  pageNumber: 0,
  pageSize: 2,
  totalPages: 1,
  totalCount: 2,
};
