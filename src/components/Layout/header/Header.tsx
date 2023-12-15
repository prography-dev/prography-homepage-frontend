'use client';

import Link from 'next/link';
import { useState } from 'react';
import Button from '@/components/common/button/Button';
import './Header.scss';
import { IconClose, IconMenu } from '@/components/common/icon';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header
      className="header-container"
      style={{ position: isMobileMenuOpen ? 'absolute' : 'sticky' }}
    >
      <div className={isMobileMenuOpen ? 'mobile-header-container' : 'content'}>
        <Link href="/" className="header-logo">
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
            <Button buttonSize="48">9기 지원</Button>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
