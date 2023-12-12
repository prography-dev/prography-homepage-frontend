export interface ProjectCardData {
  id: number;
  title: string;
  description: string;
  generation: number;
  thumbnailUrl: string;
  imageUrl: string;
  stacks: string[];
  users: {
    id: number;
    name: string;
    part: string;
  }[];
  socials: {
    type: string;
    landingUrl: string;
  }[];
}
