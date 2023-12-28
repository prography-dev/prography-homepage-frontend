'use client';

import { useEffect, useState } from 'react';
import styles from './CrewList.module.scss';
import {
  MemberData,
  Position,
  PositionDescriptions,
  getMembers,
} from '@/apis/member';
import usePc from '@/hooks/usePc';

const CrewList = () => {
  const [members, setMembers] = useState<MemberData[]>([]);
  const allPositions: Position[] = Object.values(Position);
  const [selectedPosition, setSelectedPosition] = useState<
    Position | undefined
  >(Position['Product Owner']);
  const [selectedMemberList, setSelectedMemberList] = useState<MemberData[]>(
    [],
  );
  const isChangePc = usePc();

  useEffect(() => {
    getMembers(1)
      .then(data => {
        setMembers(data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  useEffect(() => {
    const filteredMembers = members.filter(
      member => member.partName === selectedPosition,
    );

    setSelectedMemberList(filteredMembers);
  }, [members, selectedPosition, setSelectedMemberList]);

  const handlePositionClick = (position: Position) => {
    setSelectedPosition(position);
  };

  console.log(isChangePc);
  return (
    <div className={styles.CrewContainer}>
      <p id="crew" className={styles.CrewTitle}>
        Crew
      </p>

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

      {/* Position에 대한 설명 */}
      <div className={styles.PositionDescription}>
        {selectedPosition && (
          <p>{PositionDescriptions[selectedPosition].description}</p>
        )}
      </div>

      <div className={styles.MemberWrapper}>
        {selectedMemberList.map(member =>
          isChangePc ? (
            <div className={styles.MemberContainer} key={member.id}>
              <div className={styles.MemberProfileImgContainer}>
                <img
                  src={member.profileImageUrl}
                  className={styles.MemberProfileImg}
                  alt="profile"
                />
              </div>

              <div className={styles.MemberProfileDetail}>
                <span className={styles.Name}>{member.name}</span>
                <span className={styles.Slash}>/</span>
                <span className={styles.Company}>{member.company}</span>

                <div className={styles.Bubble}>{member.introduction}</div>
              </div>
            </div>
          ) : (
            <div className={styles.MemberMobileContainer} key={member.id}>
              <div className={styles.MemberProfileImgContainer}>
                <img
                  src={member.profileImageUrl}
                  className={styles.MemberProfileImg}
                  alt="profile"
                />
                <span className={styles.Name}>{member.name}</span>
                <span className={styles.Slash}>/</span>
                <span className={styles.Company}>{member.company}</span>
              </div>

              <div className={styles.MemberProfileDetail}>
                <div className={styles.Bubble}>{member.introduction}</div>
              </div>
            </div>
          ),
        )}
      </div>
    </div>
  );
};

export default CrewList;
