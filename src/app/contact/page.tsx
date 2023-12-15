'use client';

import React from 'react';
import Link from 'next/link';

import CommonWrapper from '@/components/common/layout/CommonWrapper';
import styles from './page.module.scss';
import FaqList from '@/components/Contact/FaqList';

const FaqPage = () => {
  return (
    <CommonWrapper>
      <div className={styles.PageTitleWrapper}>
        <p className="pre_heading_1">
          프로그라피를
          <br />더 알아가고 싶다면
        </p>

        <div className={styles.ContactWrapper}>
          <Link
            className="sf_heading_3_underline"
            target="_blank"
            href="mailto:prography.contact@gmail.com"
          >
            prography.contact@gmail.com
          </Link>

          <Link
            className="sf_heading_3_underline"
            target="_blank"
            href="https://www.instagram.com/prography_official/"
          >
            @Phrogrphy
          </Link>
        </div>
      </div>

      <p className="sf_heading_1">FAQ</p>
      <FaqList />
    </CommonWrapper>
  );
};

export default FaqPage;
