'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import styles from './HeaderComponent.module.scss';

import Button from '@/components/common/button/Button';
import { IconClose, IconMenu } from '@/components/common/icon';
import triggerGtm from '@/utils/triggerGtm';
import usePc from '@/hooks/usePc';

interface LandingButtonProps {
  name: string;
  status: string;
  url: string;
}

const HeaderComponent = ({ name, status, url }: LandingButtonProps) => {
  const isPc = usePc();
  const router = useRouter();
  const buttonName = (() => {
    if (status === 'WAIT') {
      return `${name} 모집 알림 신청`;
    }
    if (status === 'RECRUIT') {
      return `${name} 지원`;
    }
    return '';
  })();

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleApplyButton = () => {
    window.open(url);
    triggerGtm({
      event: 'top.button',
      status,
    });
  };

  const onClickCategory = (pathname: string) => {
    triggerGtm({
      event: `home.${pathname.substring(1)}`,
      isPc,
    });
    setIsMobileMenuOpen(false);
    router.push(pathname);
  };

  const categoryCss = (pathname: string) => {
    const isActiveCategory = usePathname() === pathname;
    const activeCss = isActiveCategory ? styles.ActiveCategory : '';

    if (isMobileMenuOpen) {
      return `sf_heading_3 ${activeCss}`;
    }
    return `sf_caption_1 ${activeCss}`;
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
          <img src="/assets/logos/logo_prography.png" alt="logo" />
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
            className={categoryCss('/about')}
            onClick={() => onClickCategory('/about')}
          >
            About
          </li>
          <li
            className={categoryCss('/project')}
            onClick={() => onClickCategory('/project')}
          >
            Project
          </li>
          <li
            className={categoryCss('/contact')}
            onClick={() => onClickCategory('/contact')}
          >
            Contact
          </li>
          {buttonName && (
            <li>
              {isMobileMenuOpen ? (
                <Button buttonSize="56" onClick={handleApplyButton}>
                  {buttonName}
                </Button>
              ) : (
                <Button buttonSize="48" onClick={handleApplyButton}>
                  {buttonName}
                </Button>
              )}
            </li>
          )}
        </ul>
      </div>
    </header>
  );
};

export default HeaderComponent;
