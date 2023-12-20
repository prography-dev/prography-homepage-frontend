'use client';

import Image from 'next/image';
import { FOOTER_LINK, FooterLink } from './footerLink';

import styles from './Footer.module.scss';

const Footer = () => {
  function openLink(link: FooterLink) {
    if (typeof window === 'undefined') return '';
    return window.open(FOOTER_LINK[link]);
  }

  return (
    <div className={styles.FooterContainer}>
      <div className={styles.Footer_Top}>
        <div className={styles.Icons}>
          <Image
            width={32}
            height={32}
            src="/assets/logos/ic_instagram.svg"
            alt="instagram"
            onClick={() => openLink(FooterLink.INSTAGRAM)}
          />
          <Image
            width={32}
            height={32}
            src="/assets/logos/ic_github.svg"
            alt="github"
            onClick={() => openLink(FooterLink.GITHUB)}
          />
        </div>
        <div className={`${styles.Contact_Texts}`}>
          <span className="sf_h6_to_h5 gray400">Contact</span>
          <span className="sf_c1_to_b2 gray400">prography@gmail.com</span>
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
