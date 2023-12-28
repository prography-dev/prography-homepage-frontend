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

interface getIconToUrlProps extends SocialsType {
  key: number;
}

export function getIconToUrl({ type, landingUrl, key }: getIconToUrlProps) {
  if (!type) return null;

  switch (type) {
    case 'INSTAGRAM':
      return <IconInstagram link={landingUrl} key={key} />;
    case 'BEHANCE':
      return <IconBehance link={landingUrl} key={key} />;
    case 'GITHUB_BE':
      return <IconGithub link={landingUrl} key={key} />;
    case 'GITHUB_FE':
      return <IconGithub link={landingUrl} key={key} />;
    case 'APP_STORE':
      return <IconAppStore link={landingUrl} key={key} />;
    case 'GOOGLE_PLAY':
      return <IconPlayStore link={landingUrl} key={key} />;
    case 'WEB':
      return <IconUrl link={landingUrl} />;
    default:
      return null;
  }
}
