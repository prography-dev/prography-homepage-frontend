import Image from 'next/image';
import styles from './Header.module.scss';
import Button from '@/components/common/button/Button';

const Header = () => {
  return (
    <header className={styles.HeaderContainer}>
      <div className={styles.Content}>
        <Image
          width={138}
          height={48}
          src="/assets/logos/logo_prography.svg"
          alt="logo"
        />

        <ul>
          <li className="pre_caption_1">About</li>
          <li className="pre_caption_1">Project</li>
          <li className="pre_caption_1">Contact</li>
          <li>
            <Button buttonSize="48">9기 지원</Button>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
