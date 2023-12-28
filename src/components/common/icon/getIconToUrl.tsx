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

function GetIconToUrl({ type, landingUrl }: SocialsType) {
  if (!type) return null;

  switch (type) {
    case 'INSTAGRAM':
      return <IconInstagram link={landingUrl} />;
    case 'BEHANCE':
      return <IconBehance link={landingUrl} />;
    case 'GITHUB_BE':
      return <IconGithub link={landingUrl} />;
    case 'GITHUB_FE':
      return <IconGithub link={landingUrl} />;
    case 'APP_STORE':
      return <IconAppStore link={landingUrl} />;
    case 'GOOGLE_PLAY':
      return <IconPlayStore link={landingUrl} />;
    case 'WEB':
      return <IconUrl link={landingUrl} />;
    default:
      return null;
  }
}

export default GetIconToUrl;
