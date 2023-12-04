import { useMemo } from 'react';
import './Button.scss';

type BUTTON_TYPE = 'primary';
type BUTTON_SIZE = '80' | '56' | '48';

interface ButtonProps {
  button_type?: BUTTON_TYPE;
  button_size?: BUTTON_SIZE;
  label: string;
  onClick?: () => void;
  disabled?: boolean;
  fulled?: boolean;
  type?: 'button' | 'submit' | 'reset';
}

const Button: React.FC<ButtonProps> = props => {
  const {
    button_type = 'primary',
    button_size = '80',
    label,
    onClick,
    disabled,
    fulled,
    type = 'button',
  } = props;

  const buttonClassName = useMemo(() => {
    if (fulled) {
      return `button SIZE_${button_size} ${button_type} fulled`;
    } else {
      return `button SIZE_${button_size} ${button_type}`;
    }
  }, [button_size, button_type, fulled]);

  return (
    <button
      className={buttonClassName}
      onClick={onClick}
      disabled={disabled}
      type={type}
    >
      {label}
    </button>
  );
};

export default Button;
