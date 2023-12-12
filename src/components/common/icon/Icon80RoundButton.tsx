import '@/styles/const.scss';

export type RoundButtonType = {
  size?: number;
  arrowColor?: string;
  circleColor?: string;
  fill?: string;
};

const Icon80RoundButton = ({
  size = 80,
  arrowColor = 'white',
  circleColor = '#47474b',
  fill = 'none',
}: RoundButtonType): JSX.Element => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 80 80"
      fill={fill}
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="40"
        cy="40"
        r="39.5"
        transform="rotate(90 40 40)"
        stroke={circleColor}
      />
      <path
        d="M40.107 50.8214L30.3927 41.1071M40.107 50.8214L49.8213 41.1071M40.107 50.8214L40.107 26.6071"
        stroke={arrowColor}
        strokeWidth="1.5"
        strokeLinecap="square"
      />
    </svg>
  );
};

export default Icon80RoundButton;
