import './Typo.scss';
import { TypeAnimation } from 'react-type-animation';

const Typo = () => {
  // 텍스트 이동간 대기 시간
  const DELAY_TIME = 1000;
  const sequence = [
    'Pro P.O',
    DELAY_TIME,
    '',
    'Pro Marketer',
    DELAY_TIME,
    '',
    'Pro Designer',
    DELAY_TIME,
    '',
    'Pro Developer',
    DELAY_TIME,
    '',
  ];

  return (
    <div className="pg-text-container">
      <span className="pg-text white">Create new&nbsp;</span>
      <div className="break-1" />
      <span className="pg-text white">value&nbsp;</span>
      <div className="break-2" />
      <span className="pg-text white">with&nbsp;</span>
      <div className="break-1" />
      <TypeAnimation
        sequence={sequence}
        wrapper="span"
        speed={10}
        cursor={false}
        deletionSpeed={10}
        className="pg-text pg-text-typo"
        repeat={Infinity}
      />
    </div>
  );
};

export default Typo;
