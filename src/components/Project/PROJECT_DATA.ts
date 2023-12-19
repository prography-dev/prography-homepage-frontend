import { ProjectCardData } from '@/apis/project';

// 더미데이터
export const EMPTY_DATA: ProjectCardData = {
  id: 0,
  title: '',
  description: '',
  generation: 0,
  thumbnailUrl: '',
  imageUrl: '',
  stacks: [],
  users: [
    {
      id: 0,
      name: '',
      part: '',
    },
  ],
  socials: [
    {
      type: '',
      landingUrl: '',
    },
  ],
};

export const PROJECT_DATA: ProjectCardData[] = [
  {
    id: 1,
    title: 'I GO BOSS 5 ',
    description: '둥다리당당저녁뭐먹지',
    generation: 8,
    thumbnailUrl:
      'https://mblogthumb-phinf.pstatic.net/MjAyMjAxMjVfMjMy/MDAxNjQzMTAyOTg1NzI0.bkW6TJVG82Gi8uG643n5SaSTYOyEcNAq0Y7xsEkOBSUg.rU7SY3uYHJGnigm3WzvBk0LkXt_cO6UOyVsfeKxbEPAg.JPEG.minziminzi128/IMG_7370.JPG?type=w800',
    imageUrl:
      'https://mblogthumb-phinf.pstatic.net/MjAyMjAxMjVfMjMy/MDAxNjQzMTAyOTg1NzI0.bkW6TJVG82Gi8uG643n5SaSTYOyEcNAq0Y7xsEkOBSUg.rU7SY3uYHJGnigm3WzvBk0LkXt_cO6UOyVsfeKxbEPAg.JPEG.minziminzi128/IMG_7370.JPG?type=w800',
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
      {
        id: 125,
        name: '강민성',
        part: 'Android',
      },
      {
        id: 125,
        name: '강민성',
        part: 'Android',
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
        landingUrl: 'https://www.instagram.com/prography_official/',
      },
    ],
  },
  {
    id: 2,
    title: '둥둥1',
    description: '나갈까',
    generation: 7,
    thumbnailUrl:
      'https://mblogthumb-phinf.pstatic.net/MjAyMjAxMjVfMjg0/MDAxNjQzMTAyOTg0Nzgz.sLrqOJ2S3r6pLboUm5yJTjB_JECC0zO9Tt3y_h86aJcg.w5VER_KDRAW3yRq8-nypsm2aGmKurM5YieSFcr1Vg0Qg.JPEG.minziminzi128/IMG_7374.JPG?type=w800',
    imageUrl:
      'https://mblogthumb-phinf.pstatic.net/MjAyMjAxMjVfMjMy/MDAxNjQzMTAyOTg1NzI0.bkW6TJVG82Gi8uG643n5SaSTYOyEcNAq0Y7xsEkOBSUg.rU7SY3uYHJGnigm3WzvBk0LkXt_cO6UOyVsfeKxbEPAg.JPEG.minziminzi128/IMG_7370.JPG?type=w800',
    stacks: ['Java', 'React', 'Spring Boot', 'MySQL', 'AWS EC2', 'Type Script'],
    users: [
      {
        id: 1,
        name: '또범우',
        part: 'Designer',
      },
      {
        id: 1,
        name: '또범우',
        part: 'Designer',
      },
      {
        id: 1,
        name: '또범우',
        part: 'Designer',
      },
      {
        id: 1,
        name: '또범우',
        part: 'Designer',
      },
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
        landingUrl: 'https://www.instagram.com/prography_official/',
      },
    ],
  },
  {
    id: 3,
    title: '7인프로젝트',
    description: '나갈까',
    generation: 7,
    thumbnailUrl:
      'https://mblogthumb-phinf.pstatic.net/MjAyMjAxMjVfMjg0/MDAxNjQzMTAyOTg0Nzgz.sLrqOJ2S3r6pLboUm5yJTjB_JECC0zO9Tt3y_h86aJcg.w5VER_KDRAW3yRq8-nypsm2aGmKurM5YieSFcr1Vg0Qg.JPEG.minziminzi128/IMG_7374.JPG?type=w800',
    imageUrl:
      'https://mblogthumb-phinf.pstatic.net/MjAyMjAxMjVfMjMy/MDAxNjQzMTAyOTg1NzI0.bkW6TJVG82Gi8uG643n5SaSTYOyEcNAq0Y7xsEkOBSUg.rU7SY3uYHJGnigm3WzvBk0LkXt_cO6UOyVsfeKxbEPAg.JPEG.minziminzi128/IMG_7370.JPG?type=w800',
    stacks: ['Java', 'React', 'Spring Boot', 'MySQL', 'AWS EC2', 'Type Script'],
    users: [
      {
        id: 1,
        name: '또범우',
        part: 'Product Owner',
      },
      {
        id: 1,
        name: '또범우',
        part: 'Designer',
      },
      {
        id: 222,
        name: '또민성',
        part: 'Product Owner',
      },
      {
        id: 222,
        name: '또민성',
        part: 'Android',
      },
      {
        id: 222,
        name: '또민성',
        part: 'Android',
      },
      {
        id: 222,
        name: '또민성',
        part: 'Android',
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
        landingUrl: 'https://www.instagram.com/prography_official/',
      },
    ],
  },
  {
    id: 4,
    title: '사람8명',
    description: '나갈까',
    generation: 7,
    thumbnailUrl:
      'https://mblogthumb-phinf.pstatic.net/MjAyMjAxMjVfMjg0/MDAxNjQzMTAyOTg0Nzgz.sLrqOJ2S3r6pLboUm5yJTjB_JECC0zO9Tt3y_h86aJcg.w5VER_KDRAW3yRq8-nypsm2aGmKurM5YieSFcr1Vg0Qg.JPEG.minziminzi128/IMG_7374.JPG?type=w800',
    imageUrl:
      'https://mblogthumb-phinf.pstatic.net/MjAyMjAxMjVfMjMy/MDAxNjQzMTAyOTg1NzI0.bkW6TJVG82Gi8uG643n5SaSTYOyEcNAq0Y7xsEkOBSUg.rU7SY3uYHJGnigm3WzvBk0LkXt_cO6UOyVsfeKxbEPAg.JPEG.minziminzi128/IMG_7370.JPG?type=w800',
    stacks: ['Java', 'React', 'Spring Boot', 'MySQL', 'AWS EC2', 'Type Script'],
    users: [
      {
        id: 1,
        name: '또범우',
        part: 'Designer',
      },
      {
        id: 1,
        name: '또범우',
        part: 'Designer',
      },
      {
        id: 1,
        name: '또범우',
        part: 'Designer',
      },
      {
        id: 1,
        name: '또범우',
        part: 'Designer',
      },
      {
        id: 1,
        name: '또범우',
        part: 'Designer',
      },
      {
        id: 1,
        name: '또범우',
        part: 'Designer',
      },
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
        landingUrl: 'https://www.instagram.com/prography_official/',
      },
    ],
  },
  {
    id: 5,
    title: '둥둥4',
    description: '나갈까',
    generation: 7,
    thumbnailUrl:
      'https://mblogthumb-phinf.pstatic.net/MjAyMjAxMjVfMjg0/MDAxNjQzMTAyOTg0Nzgz.sLrqOJ2S3r6pLboUm5yJTjB_JECC0zO9Tt3y_h86aJcg.w5VER_KDRAW3yRq8-nypsm2aGmKurM5YieSFcr1Vg0Qg.JPEG.minziminzi128/IMG_7374.JPG?type=w800',
    imageUrl:
      'https://mblogthumb-phinf.pstatic.net/MjAyMjAxMjVfMjMy/MDAxNjQzMTAyOTg1NzI0.bkW6TJVG82Gi8uG643n5SaSTYOyEcNAq0Y7xsEkOBSUg.rU7SY3uYHJGnigm3WzvBk0LkXt_cO6UOyVsfeKxbEPAg.JPEG.minziminzi128/IMG_7370.JPG?type=w800',
    stacks: ['Java', 'React', 'Spring Boot', 'MySQL', 'AWS EC2', 'Type Script'],
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
      {
        id: 222,
        name: '또민성',
        part: 'Android',
      },
      {
        id: 222,
        name: '또민성',
        part: 'Android',
      },
      {
        id: 222,
        name: '또민성',
        part: 'Android',
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
        landingUrl: 'https://www.instagram.com/prography_official/',
      },
    ],
  },
  {
    id: 6,
    title: '둥둥5',
    description: '나갈까',
    generation: 7,
    thumbnailUrl:
      'https://mblogthumb-phinf.pstatic.net/MjAyMjAxMjVfMjg0/MDAxNjQzMTAyOTg0Nzgz.sLrqOJ2S3r6pLboUm5yJTjB_JECC0zO9Tt3y_h86aJcg.w5VER_KDRAW3yRq8-nypsm2aGmKurM5YieSFcr1Vg0Qg.JPEG.minziminzi128/IMG_7374.JPG?type=w800',
    imageUrl:
      'https://mblogthumb-phinf.pstatic.net/MjAyMjAxMjVfMjMy/MDAxNjQzMTAyOTg1NzI0.bkW6TJVG82Gi8uG643n5SaSTYOyEcNAq0Y7xsEkOBSUg.rU7SY3uYHJGnigm3WzvBk0LkXt_cO6UOyVsfeKxbEPAg.JPEG.minziminzi128/IMG_7370.JPG?type=w800',
    stacks: ['Java', 'React', 'Spring Boot', 'MySQL', 'AWS EC2', 'Type Script'],
    users: [
      {
        id: 1,
        name: '또범우',
        part: 'Designer',
      },
      {
        id: 1,
        name: '또범우',
        part: 'Designer',
      },
      {
        id: 1,
        name: '또범우',
        part: 'Designer',
      },
      {
        id: 1,
        name: '또범우',
        part: 'Designer',
      },
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
        landingUrl: 'https://www.instagram.com/prography_official/',
      },
    ],
  },
  {
    id: 7,
    title: '둥둥6',
    description: '나갈까',
    generation: 7,
    thumbnailUrl:
      'https://mblogthumb-phinf.pstatic.net/MjAyMjAxMjVfMjg0/MDAxNjQzMTAyOTg0Nzgz.sLrqOJ2S3r6pLboUm5yJTjB_JECC0zO9Tt3y_h86aJcg.w5VER_KDRAW3yRq8-nypsm2aGmKurM5YieSFcr1Vg0Qg.JPEG.minziminzi128/IMG_7374.JPG?type=w800',
    imageUrl:
      'https://mblogthumb-phinf.pstatic.net/MjAyMjAxMjVfMjMy/MDAxNjQzMTAyOTg1NzI0.bkW6TJVG82Gi8uG643n5SaSTYOyEcNAq0Y7xsEkOBSUg.rU7SY3uYHJGnigm3WzvBk0LkXt_cO6UOyVsfeKxbEPAg.JPEG.minziminzi128/IMG_7370.JPG?type=w800',
    stacks: ['Java', 'React', 'Spring Boot', 'MySQL', 'AWS EC2', 'Type Script'],
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
      {
        id: 222,
        name: '또민성',
        part: 'Android',
      },
      {
        id: 222,
        name: '또민성',
        part: 'Android',
      },
      {
        id: 222,
        name: '또민성',
        part: 'Android',
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
        landingUrl: 'https://www.instagram.com/prography_official/',
      },
    ],
  },
  {
    id: 8,
    title: '둥둥7',
    description: '나갈까',
    generation: 7,
    thumbnailUrl:
      'https://mblogthumb-phinf.pstatic.net/MjAyMjAxMjVfMjg0/MDAxNjQzMTAyOTg0Nzgz.sLrqOJ2S3r6pLboUm5yJTjB_JECC0zO9Tt3y_h86aJcg.w5VER_KDRAW3yRq8-nypsm2aGmKurM5YieSFcr1Vg0Qg.JPEG.minziminzi128/IMG_7374.JPG?type=w800',
    imageUrl:
      'https://mblogthumb-phinf.pstatic.net/MjAyMjAxMjVfMjMy/MDAxNjQzMTAyOTg1NzI0.bkW6TJVG82Gi8uG643n5SaSTYOyEcNAq0Y7xsEkOBSUg.rU7SY3uYHJGnigm3WzvBk0LkXt_cO6UOyVsfeKxbEPAg.JPEG.minziminzi128/IMG_7370.JPG?type=w800',
    stacks: ['Java', 'React', 'Spring Boot', 'MySQL', 'AWS EC2', 'Type Script'],
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
      {
        id: 222,
        name: '또민성',
        part: 'Android',
      },
      {
        id: 222,
        name: '또민성',
        part: 'Android',
      },
      {
        id: 222,
        name: '또민성',
        part: 'Android',
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
        landingUrl: 'https://www.instagram.com/prography_official/',
      },
    ],
  },
  {
    id: 9,
    title: '둥둥8',
    description: '나갈까',
    generation: 7,
    thumbnailUrl:
      'https://mblogthumb-phinf.pstatic.net/MjAyMjAxMjVfMjg0/MDAxNjQzMTAyOTg0Nzgz.sLrqOJ2S3r6pLboUm5yJTjB_JECC0zO9Tt3y_h86aJcg.w5VER_KDRAW3yRq8-nypsm2aGmKurM5YieSFcr1Vg0Qg.JPEG.minziminzi128/IMG_7374.JPG?type=w800',
    imageUrl:
      'https://mblogthumb-phinf.pstatic.net/MjAyMjAxMjVfMjMy/MDAxNjQzMTAyOTg1NzI0.bkW6TJVG82Gi8uG643n5SaSTYOyEcNAq0Y7xsEkOBSUg.rU7SY3uYHJGnigm3WzvBk0LkXt_cO6UOyVsfeKxbEPAg.JPEG.minziminzi128/IMG_7370.JPG?type=w800',
    stacks: ['Java', 'React', 'Spring Boot', 'MySQL', 'AWS EC2', 'Type Script'],
    users: [
      {
        id: 1,
        name: '또범우',
        part: 'Designer',
      },
      {
        id: 1,
        name: '또범우',
        part: 'Designer',
      },
      {
        id: 1,
        name: '또범우',
        part: 'Designer',
      },
      {
        id: 1,
        name: '또범우',
        part: 'Designer',
      },
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
        landingUrl: 'https://www.instagram.com/prography_official/',
      },
    ],
  },
  {
    id: 9,
    title: '둥둥9',
    description: '나갈까',
    generation: 7,
    thumbnailUrl:
      'https://mblogthumb-phinf.pstatic.net/MjAyMjAxMjVfMjg0/MDAxNjQzMTAyOTg0Nzgz.sLrqOJ2S3r6pLboUm5yJTjB_JECC0zO9Tt3y_h86aJcg.w5VER_KDRAW3yRq8-nypsm2aGmKurM5YieSFcr1Vg0Qg.JPEG.minziminzi128/IMG_7374.JPG?type=w800',
    imageUrl:
      'https://mblogthumb-phinf.pstatic.net/MjAyMjAxMjVfMjMy/MDAxNjQzMTAyOTg1NzI0.bkW6TJVG82Gi8uG643n5SaSTYOyEcNAq0Y7xsEkOBSUg.rU7SY3uYHJGnigm3WzvBk0LkXt_cO6UOyVsfeKxbEPAg.JPEG.minziminzi128/IMG_7370.JPG?type=w800',
    stacks: ['Java', 'React', 'Spring Boot', 'MySQL', 'AWS EC2', 'Type Script'],
    users: [
      {
        id: 1,
        name: '또범우',
        part: 'Designer',
      },
      {
        id: 1,
        name: '또범우',
        part: 'Designer',
      },
      {
        id: 1,
        name: '또범우',
        part: 'Designer',
      },
      {
        id: 1,
        name: '또범우',
        part: 'Designer',
      },
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
        landingUrl: 'https://www.instagram.com/prography_official/',
      },
    ],
  },
  {
    id: 9,
    title: '둥둥10',
    description: '나갈까',
    generation: 7,
    thumbnailUrl:
      'https://mblogthumb-phinf.pstatic.net/MjAyMjAxMjVfMjg0/MDAxNjQzMTAyOTg0Nzgz.sLrqOJ2S3r6pLboUm5yJTjB_JECC0zO9Tt3y_h86aJcg.w5VER_KDRAW3yRq8-nypsm2aGmKurM5YieSFcr1Vg0Qg.JPEG.minziminzi128/IMG_7374.JPG?type=w800',
    imageUrl:
      'https://mblogthumb-phinf.pstatic.net/MjAyMjAxMjVfMjMy/MDAxNjQzMTAyOTg1NzI0.bkW6TJVG82Gi8uG643n5SaSTYOyEcNAq0Y7xsEkOBSUg.rU7SY3uYHJGnigm3WzvBk0LkXt_cO6UOyVsfeKxbEPAg.JPEG.minziminzi128/IMG_7370.JPG?type=w800',
    stacks: ['Java', 'React', 'Spring Boot', 'MySQL', 'AWS EC2', 'Type Script'],
    users: [
      {
        id: 1,
        name: '또범우',
        part: 'Designer',
      },
      {
        id: 1,
        name: '또범우',
        part: 'Designer',
      },
      {
        id: 1,
        name: '또범우',
        part: 'Designer',
      },
      {
        id: 1,
        name: '또범우',
        part: 'Designer',
      },
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
        landingUrl: 'https://www.instagram.com/prography_official/',
      },
    ],
  },
  {
    id: 9,
    title: '둥둥11',
    description: '나갈까',
    generation: 7,
    thumbnailUrl:
      'https://mblogthumb-phinf.pstatic.net/MjAyMjAxMjVfMjg0/MDAxNjQzMTAyOTg0Nzgz.sLrqOJ2S3r6pLboUm5yJTjB_JECC0zO9Tt3y_h86aJcg.w5VER_KDRAW3yRq8-nypsm2aGmKurM5YieSFcr1Vg0Qg.JPEG.minziminzi128/IMG_7374.JPG?type=w800',
    imageUrl:
      'https://mblogthumb-phinf.pstatic.net/MjAyMjAxMjVfMjMy/MDAxNjQzMTAyOTg1NzI0.bkW6TJVG82Gi8uG643n5SaSTYOyEcNAq0Y7xsEkOBSUg.rU7SY3uYHJGnigm3WzvBk0LkXt_cO6UOyVsfeKxbEPAg.JPEG.minziminzi128/IMG_7370.JPG?type=w800',
    stacks: ['Java', 'React', 'Spring Boot', 'MySQL', 'AWS EC2', 'Type Script'],
    users: [
      {
        id: 1,
        name: '또범우',
        part: 'Designer',
      },
      {
        id: 1,
        name: '또범우',
        part: 'Designer',
      },
      {
        id: 1,
        name: '또범우',
        part: 'Designer',
      },
      {
        id: 1,
        name: '또범우',
        part: 'Designer',
      },
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
        landingUrl: 'https://www.instagram.com/prography_official/',
      },
    ],
  },
];
