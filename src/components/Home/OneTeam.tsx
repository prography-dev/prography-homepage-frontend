import './OneTeam.scss';

interface TeamProps {
  value: string;
  backgroundColor: string;
}

const OneTeam = () => {
  // toDo: api 교체 필요
  const pgTeam: TeamProps[] = [
    {
      value: 'Product Owner',
      backgroundColor: '#FFB904',
    },
    {
      value: 'Marketer',
      backgroundColor: '#1033FF',
    },
    {
      value: 'Designer',
      backgroundColor: '#FF6929',
    },
    {
      value: 'IOS',
      backgroundColor: '#FA2454',
    },
    {
      value: 'Android',
      backgroundColor: '#FA2454',
    },
    {
      value: 'Frontend(React)',
      backgroundColor: '#FA2454',
    },
    {
      value: 'Backend(Spring)',
      backgroundColor: '#FA2454',
    },
  ];
  return (
    <>
      <p className="pg-team-text white">
        PO, 마케터, 디자이너, 개발자가 한 팀을 이뤄 완성도 높은 서비스를
        만듭니다.
      </p>
      <div className="pg-team-wrapper">
        {pgTeam.map(({ value, backgroundColor }) => (
          <div
            className="pg-team white"
            style={{ backgroundColor }}
            key={value}
          >
            {value}
          </div>
        ))}
      </div>
    </>
  );
};

export default OneTeam;
