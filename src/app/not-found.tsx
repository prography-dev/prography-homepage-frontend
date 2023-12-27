'use client';

import Button from '@/components/common/button/Button';
import CommonWrapper from '@/components/common/layout/CommonWrapper';
import styles from './[...not_found]/page.module.scss';

export default function NotFoundPage() {
  return (
    <CommonWrapper>
      <div className={styles.ErrorConatiner}>
        <h2 className={styles.ErrorTitle}>
          원하시는 페이지를 찾을 수 없습니다
        </h2>
        <p className={styles.ErrorMessage}>
          페이지의 주소가 잘못 입력되었거나, 변경 또는 삭제로 인해 현재는 사용할
          수 없습니다. <br />
          페이지의 주소를 다시 한번 확인해 주세요.
        </p>
        <Button
          onClick={() => {
            window.location.href = '/';
          }}
        >
          홈으로 돌아가기
        </Button>
      </div>
    </CommonWrapper>
  );
}
