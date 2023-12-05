'use client';
import { IconProps } from '.';

const IconRight = ({
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
        d="M28.2143 15.7143L18.5 25.4286M28.2143 15.7143L18.5 6M28.2143 15.7143H4"
        stroke={color}
        stroke-width="1.5"
        stroke-linecap="square"
      />
    </svg>
  );
};

export default IconRight;
