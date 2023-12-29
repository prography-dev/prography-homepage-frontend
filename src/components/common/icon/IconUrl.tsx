'use client';

import { IconProps } from '.';

const IconUrl = ({
  size = 50,
  color = 'white',
  onClick,
}: IconProps): JSX.Element => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 50 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onClick={onClick}
    >
      <circle cx="25" cy="25" r="25" fill={color} />
      <g clipPath="url(#clip0_1328_945)">
        <path
          d="M13 25C13 26.5759 13.3104 28.1363 13.9134 29.5922C14.5165 31.0481 15.4004 32.371 16.5147 33.4853C17.629 34.5996 18.9519 35.4835 20.4078 36.0866C21.8637 36.6896 23.4241 37 25 37C26.5759 37 28.1363 36.6896 29.5922 36.0866C31.0481 35.4835 32.371 34.5996 33.4853 33.4853C34.5996 32.371 35.4835 31.0481 36.0866 29.5922C36.6896 28.1363 37 26.5759 37 25C37 21.8174 35.7357 18.7652 33.4853 16.5147C31.2348 14.2643 28.1826 13 25 13C21.8174 13 18.7652 14.2643 16.5147 16.5147C14.2643 18.7652 13 21.8174 13 25Z"
          stroke="#1C1C1E"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M13.7998 21H36.1998"
          stroke="#1C1C1E"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M13.7998 29H36.1998"
          stroke="#1C1C1E"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M24.3335 13C22.0873 16.5995 20.8965 20.7572 20.8965 25C20.8965 29.2428 22.0873 33.4005 24.3335 37"
          stroke="#1C1C1E"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M25.667 13C27.9132 16.5995 29.1041 20.7572 29.1041 25C29.1041 29.2428 27.9132 33.4005 25.667 37"
          stroke="#1C1C1E"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_1328_945">
          <rect
            width="32"
            height="32"
            fill="white"
            transform="translate(9 9)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export default IconUrl;
