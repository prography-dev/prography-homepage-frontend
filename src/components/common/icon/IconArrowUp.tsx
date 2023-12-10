'use client';

import { IconProps } from '.';

const IconArrowUp = ({
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
      <path d="M3 17L12 8L21 17" stroke={color} strokeWidth="1.5" />
    </svg>
  );
};

export default IconArrowUp;
