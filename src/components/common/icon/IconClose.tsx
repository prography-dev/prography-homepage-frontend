'use client';

import { IconProps } from '.';

const IconClose = ({
  size = 20,
  color = 'white',
  ...props
}: IconProps): JSX.Element => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 22 22"
      color={color}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M1 1L21 21M21 1L1 21" stroke={color} strokeWidth="1.5" />
    </svg>
  );
};

export default IconClose;
