'use client';

import Link from 'next/link';
import { useState } from 'react';
import Button from '@/components/common/button/Button';
import styles from './Header.module.scss';
import { IconClose, IconMenu } from '@/components/common/icon';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header
      className={styles.HeaderContainer}
      style={{ position: isMobileMenuOpen ? 'absolute' : 'sticky' }}
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
          <li>
            <Link
              href="/about"
              className={isMobileMenuOpen ? 'sf_heading_3' : 'sf_caption_1'}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="/project"
              className={isMobileMenuOpen ? 'sf_heading_3' : 'sf_caption_1'}
            >
              Project
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className={isMobileMenuOpen ? 'sf_heading_3' : 'sf_caption_1'}
            >
              Contact
            </Link>
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
