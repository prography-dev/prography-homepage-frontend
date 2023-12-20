import { RoundButtonType } from './Icon80RoundButton';

const Icon64PageButton = ({
  size = 64,
  arrowColor = 'white',
  circleColor = '#1C1C1E',
  fill = 'none',
  rotate = 0,
}: RoundButtonType) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill={fill}
      xmlns="http://www.w3.org/2000/svg"
      transform={`rotate(${rotate})`}
    >
      <circle
        cx="32"
        cy="32"
        r="32"
        transform="matrix(-1 0 0 1 64 0)"
        fill={circleColor}
      />
      <path
        d="M34.5 23.5L25.5 32.5L34.5 41.5"
        stroke={arrowColor}
        strokeWidth="1.5"
      />
    </svg>
  );
};

export default Icon64PageButton;
