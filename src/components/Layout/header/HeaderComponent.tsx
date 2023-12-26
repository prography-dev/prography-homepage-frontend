'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import styles from './HeaderComponent.module.scss';

import Button from '@/components/common/button/Button';
import { IconClose, IconMenu } from '@/components/common/icon';

interface LandingButtonProps {
  name: string;
  status: string;
  url: string;
}

const HeaderComponent = ({ name, status, url }: LandingButtonProps) => {
  const router = useRouter();

  const buttonName = `${name} ${
    status === 'RECRUIT' ? '지원' : '모집 알림 신청'
  }`;

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleApplyButton = () => {
    // toDo: 구글 폼 나온 후 수정 필요
    window.open(url);
  };

  const onClickCategory = (pathname: string) => {
    setIsMobileMenuOpen(false);
    router.push(pathname);
  };

  return (
    <header
      className={`${styles.HeaderContainer} ${
        isMobileMenuOpen ? styles.MobileMenuOpen : styles.MobileMenuClose
      }`}
    >
      <div
        className={
          isMobileMenuOpen ? styles.MobileMenuContainer : styles.Content
        }
      >
        <Link href="/" className={styles.HeaderLogo}>
          <img src="/assets/logos/logo_prography.svg" alt="logo" />
        </Link>

        {isMobileMenuOpen ? (
          <IconClose
            color="white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          />
        ) : (
          <IconMenu
            color="white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          />
        )}

        <ul>
          <li
            className={isMobileMenuOpen ? 'sf_heading_3' : 'sf_caption_1'}
            onClick={() => onClickCategory('/about')}
          >
            About
          </li>
          <li
            className={isMobileMenuOpen ? 'sf_heading_3' : 'sf_caption_1'}
            onClick={() => onClickCategory('/project')}
          >
            Project
          </li>
          <li
            className={isMobileMenuOpen ? 'sf_heading_3' : 'sf_caption_1'}
            onClick={() => onClickCategory('/contact')}
          >
            Contact
          </li>
          <li>
            <Button buttonSize="56" onClick={handleApplyButton}>
              {buttonName}
            </Button>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default HeaderComponent;
