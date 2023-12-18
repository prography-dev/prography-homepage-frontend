import { useEffect, useState } from 'react';
import styles from './CrewList.module.scss';
import { MemberData, Position } from '@/apis/member';
import { MEMBER_DATA } from './MEMBER_DATA';

const CrewList = () => {
  const allPositions: Position[] = Object.values(Position);
  const [selectedPosition, setSelectedPosition] = useState<
    Position | undefined
  >(Position['Product Owner']);
  const [selectedMemberList, setSelectedMemberList] = useState<MemberData[]>(
    [],
  );

  useEffect(() => {
    const filteredMembers = MEMBER_DATA.filter(
      member => member.partName === selectedPosition,
    );

    setSelectedMemberList(filteredMembers);
  }, [selectedPosition, setSelectedMemberList]);

  const handlePositionClick = (position: Position) => {
    setSelectedPosition(position);
  };

  return (
    <div className={styles.CrewContainer}>
      <p className="sf_heading_1">Crew</p>

      <div className={styles.PositionWrapper}>
        {allPositions.map((item, idx) => (
          <div
            className={
              selectedPosition === item
                ? styles.SelectedPositionButton
                : styles.PositionButton
            }
            key={idx}
            onClick={() => handlePositionClick(item)}
          >
            {item}
          </div>
        ))}
      </div>

      <div className={styles.MemberWrapper}>
        {selectedMemberList.map(member => (
          <div className={styles.MemberContainer} key={member.id}>
            <img
              src={member.profileImageUrl}
              className={styles.MemberProfileImg}
              alt="profile"
            />

            <div className={styles.MemberProfileDetail}>
              <span className={styles.Name}>{member.name}</span>
              <span className={styles.Slash}>/</span>
              <span className={styles.Company}>{member.company}</span>

              <div className={styles.Bubble}>{member.introduction}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CrewList;
