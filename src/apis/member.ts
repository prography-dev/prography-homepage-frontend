export enum Position {
  'Product Owner' = 'Product Owner',
  'Designer' = 'Designer',
  'Marketer' = 'Marketer',
  'iOS' = 'iOS',
  'Android' = 'Android',
  'Web Front' = 'Web Front',
  'Server' = 'Server',
}

export interface MemberData {
  id: string;
  name: string;
  generation: number;
  profileImageUrl: string;
  company: string;
  introduction: string;
  partId: number;
  partName: Position;
}
