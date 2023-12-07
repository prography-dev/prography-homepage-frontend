import './Button.scss';

import { useMemo } from 'react';

type BUTTON_TYPE = 'primary';
type BUTTON_SIZE = '80' | '56' | '48';

interface ButtonProps {
  buttonType?: BUTTON_TYPE;
  buttonSize?: BUTTON_SIZE;
  label: string;
  onClick?: () => void;
  disabled?: boolean;
  fulled?: boolean;
  type?: 'button' | 'submit' | 'reset';
}

const Button: React.FC<ButtonProps> = props => {
  const {
    buttonType = 'primary',
    buttonSize = '80',
    label,
    onClick,
    disabled,
    fulled,
    type = 'button',
  } = props;

  const buttonClassName = useMemo(() => {
    if (fulled) {
      return `button SIZE_${buttonSize} ${buttonType} fulled`;
    }
    return `button SIZE_${buttonSize} ${buttonType}`;
  }, [buttonSize, buttonType, fulled]);

  return (
    <button
      className={buttonClassName}
      onClick={onClick}
      disabled={disabled}
      // eslint-disable-next-line react/button-has-type
      type={type}
    >
      {label}
    </button>
  );
};

export default Button;
