'use client';

import React from 'react';
import Link from 'next/link';

import CommonWrapper from '@/components/common/layout/CommonWrapper';
import styles from './page.module.scss';
import FaqList from '@/components/Contact/FaqList';
import AsanDonation from '@/components/common/donation/AsanDonation';

const FaqPage = () => {
  return (
    <CommonWrapper>
      <div className={styles.PageTitleWrapper}>
        <p className={styles.PageTitle}>
          프로그라피를
          <br />더 알아가고 싶다면
        </p>

        <div className={styles.ContactWrapper}>
          <Link target="_blank" href="mailto:contact.prography@gmail.com">
            contact.prography@gmail.com
          </Link>

          <Link
            target="_blank"
            href="https://www.instagram.com/prography_official/"
          >
            @Prography
          </Link>
        </div>
      </div>

      <p className={styles.FAQTitle}>FAQ</p>
      <FaqList />
      <div className={styles.DonationWrapper}>
        <AsanDonation showDonationButton />
      </div>
    </CommonWrapper>
  );
};

export default FaqPage;
