import './PageRouterButton.scss';
import Link from 'next/link';
import IconRight from '../common/icon/IconRight';

interface ButtonProps {
  label: string;
  href: string;
}

const PageRouterButton: React.FC<ButtonProps> = props => {
  const { label, href } = props;

  return (
    <Link href={href} className="pg-router-container">
      <span className="pg-router-label white">{label}</span>
      <div className="pg-icon-wrapper">
        <IconRight size={16} />
      </div>
    </Link>
  );
};

export default PageRouterButton;
