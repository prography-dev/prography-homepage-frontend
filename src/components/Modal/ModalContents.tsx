import Image from 'next/image';
import { ProjectCardData } from '@/apis/project';
import styles from './ModalContents.module.scss';

const ModalContents = ({
  description,
  imageUrl,
}: Pick<ProjectCardData, 'description' | 'imageUrl'>) => {
  return (
    <div className={`${styles.ContentsWrapper}`}>
      <div className="sf_c1_to_b2">{description}</div>
      <Image
        src={imageUrl}
        alt="thumbnail"
        width={100}
        height={100}
        layout="responsive"
      />
    </div>
  );
};

export default ModalContents;
