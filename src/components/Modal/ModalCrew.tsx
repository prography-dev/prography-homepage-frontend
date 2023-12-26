import Image from 'next/image';
import Button from '../common/button/Button';
import IconSlash from '../common/icon/IconSlash';
import { ModalCrewSkeleton } from './ModalSkeleton';
import { ProjectCardData } from '@/apis/project';
import { handleEmailClick } from '@/utils/contactToEmail';
import styles from './ModalCrew.module.scss';

interface ModalCrewProps extends Pick<ProjectCardData, 'members'> {
  isLoading: boolean;
}

const ModalCrew = ({ members, isLoading }: ModalCrewProps) => {
  return (
    <div className={styles.CrewWrapper}>
      <div className="sf_h3_to_h1">Crew</div>
      <div className={styles.Crews}>
        {members.map((el, idx) => (
          <div className={styles.CrewDiv} key={idx}>
            {isLoading ? (
              <ModalCrewSkeleton />
            ) : (
              <>
                <div className={styles.ImageCon}>
                  <Image
                    src="/assets/images/defaultPersonImage.png"
                    alt="default"
                    width={100}
                    height={100}
                    layout="responsive"
                  />
                </div>
                <div className={`${styles.CrewName} pre_h6_to_h5`}>
                  {el.name}
                </div>
                <IconSlash />
                <div className={`${styles.CrewPart} pre_h6_to_h5 gray400`}>
                  {el.part}
                </div>
              </>
            )}
          </div>
        ))}
        <div className={styles.ProjectContact}>
          <div className="pre_c1_to_b2">
            위 프로젝트를 응원하고 싶거나
            <br />더 알고 싶다면 이메일을 보내주세요.
          </div>
          <Button buttonSize="56" onClick={handleEmailClick}>
            프로젝트 문의
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ModalCrew;
