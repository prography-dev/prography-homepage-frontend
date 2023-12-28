import { ProjectType } from '@/apis/project';

// 초기데이터
export const EMPTY_DATA: ProjectType = {
  id: 0,
  title: '',
  description: '',
  generation: 0,
  thumbnailImageUrl: '',
  detailImageUrl: '',
  stacks: [],
  members: [
    {
      id: 0,
      name: '',
      part: '',
    },
  ],
  socials: [
    {
      type: 'EMPTY',
      landingUrl: '',
    },
  ],
};
