'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import Button from '@/components/common/button/Button';
import styles from './Header.module.scss';
import { IconClose, IconMenu } from '@/components/common/icon';

const Header = () => {
  const router = useRouter();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
            <Button buttonSize="56">9기 지원</Button>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
