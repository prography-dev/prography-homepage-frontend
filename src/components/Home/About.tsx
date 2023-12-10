import './About.scss';
import { useEffect, useState } from 'react';
import CountUp from 'react-countup';

interface CountProps {
  applicant: number;
  project: number;
}

const About = () => {
  const [loading, setLoading] = useState(false);
  const [count, setCount] = useState<CountProps>({
    applicant: 0,
    project: 0,
  });

  useEffect(() => {
    // toDo: api 교체 필요
    setCount({ ...count, applicant: 100, project: 50 });
    setLoading(true);
  }, []);

  const defaultOptions = {
    'aria-busy': loading,
    className: 'pg-countup-value',
    enableScrollSpy: true,
    redraw: true,
  };

  return (
    <div className="pg-countup-container">
      <div className="pg-countup-wrapper">
        <CountUp end={count.applicant} {...defaultOptions} />
        <span className="pg-countup-value">+</span>
        <p className="pg-countup-label">평균 지원자</p>
      </div>
      <div className="pg-countup-wrapper" aria-busy={loading}>
        <CountUp end={count.project} {...defaultOptions} />
        <span className="pg-countup-value">+</span>
        <p className="pg-countup-label">프로젝트</p>
      </div>
    </div>
  );
};

export default About;
