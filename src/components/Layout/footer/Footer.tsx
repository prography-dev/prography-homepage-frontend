'use client';

import { FOOTER_LINK, FooterLink } from './footerLink';
import { IconGithub, IconInstagram } from '@/components/common/icon';

import styles from './Footer.module.scss';

const Footer = () => {
  function getLink(link: FooterLink) {
    return FOOTER_LINK[link];
  }

  return (
    <div className={styles.FooterContainer}>
      <div className={styles.Footer_Top}>
        <div className={styles.Icons}>
          <IconInstagram size={32} link={getLink(FooterLink.INSTAGRAM)} />
          <IconGithub size={32} link={getLink(FooterLink.GITHUB)} />
        </div>
        <div className={`${styles.Contact_Texts}`}>
          <span className="sf_h6_to_h5 gray400">Contact</span>
          <span className="sf_c1_to_b2 gray400">
            prography.contact@gmail.com
          </span>
        </div>
      </div>
      <div className={styles.Line} />
      <div className="sf_caption_1 gray600">
        © 2024 Prography. ALL RIGHTS RESERVED.
      </div>
    </div>
  );
};

export default Footer;
