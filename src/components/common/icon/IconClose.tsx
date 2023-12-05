'use client';
import { IconProps } from '.';

const IconClose = ({
  size = 24,
  color = 'white',
  ...props
}: IconProps): JSX.Element => {
  return (
    <svg
      width={size}
      height={size}
      fill="none"
      viewBox="0 0 24 24"
      color={color}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M6 6L26 26M26 6L6 26" stroke={color} stroke-width="1.5" />
    </svg>
  );
};

export default IconClose;
