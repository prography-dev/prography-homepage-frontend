export enum FooterLink {
  BEHANCE,
  INSTAGRAM,
  GITHUB,
}

export const FOOTER_LINK: Record<FooterLink, string> = {
  [FooterLink.BEHANCE]: '',
  [FooterLink.INSTAGRAM]: 'https://www.instagram.com/prography_official/',
  [FooterLink.GITHUB]: 'https://github.com/prography/',
};
