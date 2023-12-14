import Image from 'next/image';
import Link from 'next/link';
import Button from '@/components/common/button/Button';
import styles from './Header.module.scss';

const Header = () => {
  return (
    <header className={styles.HeaderContainer}>
      <div className={styles.Content}>
        <Link href="/">
          <Image
            width={138}
            height={48}
            src="/assets/logos/logo_prography.svg"
            alt="logo"
          />
        </Link>

        <ul>
          <li>
            <Link href="/about" className="sf_caption_1">
              About
            </Link>
          </li>
          <li>
            <Link href="/project" className="sf_caption_1">
              Project
            </Link>
          </li>
          <li>
            <Link href="/contact" className="sf_caption_1">
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
