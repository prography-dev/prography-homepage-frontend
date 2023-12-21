import Link from 'next/link';
import styles from './PageRouterButton.module.scss';
import IconRight from '../common/icon/IconRight';

interface ButtonProps {
  label: string;
  href: string;
}

const PageRouterButton: React.FC<ButtonProps> = props => {
  const { label, href } = props;

  return (
    <Link href={href} className={styles.PgRouterContainer}>
      <span className={styles.PgRouterLabel}>{label}</span>
      <div className={styles.PgIconWrapper}>
        <IconRight size={16} />
      </div>
    </Link>
  );
};

export default PageRouterButton;
