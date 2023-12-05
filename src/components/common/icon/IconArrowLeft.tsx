'use client';
import { IconProps } from '.';

const IconArrowLeft = ({
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
      <path
        d="M14.5 3.5L5.5 12.5L14.5 21.5"
        stroke={color}
        stroke-width="1.5"
      />
    </svg>
  );
};

export default IconArrowLeft;
