'use client';
import { IconProps } from '.';

const IconDown = ({
  size = 32,
  color = 'white',
  ...props
}: IconProps): JSX.Element => {
  return (
    <svg
      width={size}
      height={size}
      fill="none"
      viewBox="0 0 32 32"
      color={color}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M16.107 27.8215L6.39271 18.1072M16.107 27.8215L25.8213 18.1072M16.107 27.8215L16.107 3.60718"
        stroke={color}
        stroke-width="1.5"
        stroke-linecap="square"
      />
    </svg>
  );
};

export default IconDown;
