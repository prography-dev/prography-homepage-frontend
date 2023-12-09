import Image from 'next/image';
import styles from './Footer.module.scss';

const Footer = () => {
  return (
    <div className={styles.FooterContainer}>
      <div className={styles.Footer_Top}>
        <div className={styles.Icons}>
          <Image
            width={32}
            height={32}
            src="/assets/logos/ic_behance.svg"
            alt="behance"
          />
          <Image
            width={32}
            height={32}
            src="/assets/logos/ic_instagram.svg"
            alt="behance"
          />
          <Image
            width={32}
            height={32}
            src="/assets/logos/ic_github.svg"
            alt="behance"
          />
        </div>
        <div className={`${styles.Contact_Texts} gray400`}>
          <span className="sf_heading_5">Contact</span>
          <span className="sf_body_2">prography@gmail.com</span>
        </div>
      </div>
      <div className={styles.Line} />
      <div className="pre_heading_6 gray600">
        © 2024 Prography. ALL RIGHTS RESERVED.
      </div>
    </div>
  );
};

export default Footer;
