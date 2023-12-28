import { getData } from '.';

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
  socials: {
    type: string;
    landingUrl: string;
  }[];
}

export const getProjectData = () => getData<ProjectType[]>('projects');
