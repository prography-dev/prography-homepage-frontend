import { getData } from '.';

export interface SocialsType {
  type:
    | 'BEHANCE'
    | 'GITHUB_BE'
    | 'GITHUB_FE'
    | 'INSTAGRAM'
    | 'APP_STORE'
    | 'GOOGLE_PLAY'
    | 'WEB'
    | 'EMPTY';
  landingUrl: string;
}
export interface ProjectType {
  id: number;
  title: string;
  description: string;
  generation: number;
  thumbnailImageUrl: string;
  detailImageUrl: string;
  stacks: string[];
  members: {
    id: number;
    name: string;
    part: string;
  }[];
  socials: SocialsType[];
}

export const getProjectData = () => getData<ProjectType[]>('projects');
