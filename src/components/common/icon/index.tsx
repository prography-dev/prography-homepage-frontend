export interface IconType extends React.SVGProps<SVGSVGElement> {
  size: number;
  color: string;
  link: string;
}

export type IconProps = Partial<IconType>;

export { default as IconArrowDown } from './IconArrowDown';
export { default as IconArrowLeft } from './IconArrowLeft';
export { default as IconArrowUp } from './IconArrowUp';
export { default as IconArrowRight } from './IconArrowRight';
export { default as IconClose } from './IconClose';
export { default as IconMenu } from './IconMenu';
export { default as IconDown } from './IconDown';
export { default as IconRight } from './IconRight';
export { default as IconInstagram } from './IconInstagram';
export { default as IconGithub } from './IconGithub';
export { default as IconBehance } from './IconBehance';
export { default as LogoAsan } from './LogoAsan';
