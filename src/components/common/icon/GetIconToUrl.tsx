'use client';

import {
  IconBehance,
  IconGithub,
  IconInstagram,
} from '@/components/common/icon';

import IconAppStore from './IconAppStore';
import IconPlayStore from './IconPlayStore';
import IconUrl from './IconUrl';
import { SocialsType } from '@/apis/project';
import triggerGtm from '@/utils/triggerGtm';

function GetIconToUrl({ type, landingUrl, title }: Omit<SocialsType, 'order'>) {
  if (!type) return null;

  const handleButton = (type: string) => {
    triggerGtm({
      event: `project.social`,
      projectTitle: title,
      socialType: type,
    });
    window.open(landingUrl);
  };

  switch (type) {
    case 'INSTAGRAM':
      return <IconInstagram onClick={() => handleButton('instagram')} />;
    case 'BEHANCE':
      return <IconBehance onClick={() => handleButton('behance')} />;
    case 'GITHUB_BE':
      return <IconGithub onClick={() => handleButton('github_be')} />;
    case 'GITHUB_FE':
      return <IconGithub onClick={() => handleButton('github_fe')} />;
    case 'APP_STORE':
      return <IconAppStore onClick={() => handleButton('appstore')} />;
    case 'GOOGLE_PLAY':
      return <IconPlayStore onClick={() => handleButton('googleplay')} />;
    case 'WEB':
      return <IconUrl onClick={() => handleButton('web')} />;
    default:
      return null;
  }
}

export default GetIconToUrl;
