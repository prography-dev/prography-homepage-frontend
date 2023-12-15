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
      viewBox={`0 0 ${size} ${size}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M20.5 3L3 20.5" stroke={color} strokeWidth="1.2" />
      <path d="M20.5 20.5L3 3" stroke={color} strokeWidth="1.2" />
    </svg>
  );
};

export default IconClose;
