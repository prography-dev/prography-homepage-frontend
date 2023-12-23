export enum Position {
  'ProductOwner' = 'Product Owner',
  'Designer' = 'Designer',
  'Marketer' = 'Marketer',
  'iOS' = 'iOS',
  'Android' = 'Android',
  'WebFront' = 'Web Front',
  'Server' = 'Server',
}

export const PositionDescriptions = {
  [Position.ProductOwner]: {
    description:
      '프로젝트를 리드하는 사람, P.O입니다. 논리를 바탕으로 원만하게 소통하며 방향성을 정의하고, 각 팀원의 일정을 조율하죠.',
  },
  [Position.Designer]: {
    description:
      '디자인을 통해 프로덕트의 가치를 높입니다. 사용자의 니즈를 파악해 컨셉을 도출하고, 더 나은 UX/UI디자인을 설계하죠. 프로덕트의 성과를 분석하고 개선하는 일까지, 무궁무진한 일을 해내고 있어요.',
  },
  [Position.Marketer]: {
    description:
      '사용자가 프로덕트를 경험하고 팬이 되게끔 하는 여정을 설계합니다. 사용자를 이해하는 것은 기본, 그에 맞는 전략을 수립하고 실행하죠.',
  },
  [Position.WebFront]: {
    description:
      '서비스의 가치를 극대화하기 위해 다양한 기능을 고민하고 개발합니다. 사용자 경험을 향상시키고, 비즈니스 성장을 도모하죠.',
  },
  [Position.Android]: {
    description:
      '하루면 바뀔 수 있는 파도같은 생태계에서, 매일매일 적응하는 존재들입니다.',
  },
  [Position.iOS]: {
    description:
      '사용자와 가장 가까이 있어요. 그렇기에 다양한 가치를 제공할 수 있도록 부지런히 고민하죠.',
  },
  [Position.Server]: {
    description: `'봄'이 오면 '버그'가 깨어나지만, 우리는 '코드'로 그것을 잡아먹는 '개발 곰'들의 집단입니다.`,
  },
};

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
