import { useEffect, useState } from 'react';

import Image from 'next/image';
import { ModalContentsSkeleton } from './ModalSkeleton';
import { ProjectType } from '@/apis/project';
import styles from './ModalContents.module.scss';

interface ModalContentsType
  extends Pick<ProjectType, 'description' | 'detailImageUrl'> {
  onLoading: (status: boolean) => void;
}

const ModalContents = ({
  description,
  detailImageUrl,
  onLoading,
}: ModalContentsType) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    onLoading(isLoading);
  }, [isLoading]);

  return (
    <div className={`${styles.ContentsWrapper}`}>
      {isLoading ? (
        <ModalContentsSkeleton />
      ) : (
        <div className="sf_c1_to_b2">{description}</div>
      )}
      <Image
        src={detailImageUrl}
        alt="thumbnail"
        width={100}
        height={100}
        layout="responsive"
        onLoad={() => setIsLoading(false)}
      />
    </div>
  );
};

export default ModalContents;
