import { memo } from 'react';
import cx from 'classnames';
import styles from './Button.module.scss';

interface ButtonProps {
  onClick: () => void;
  text: string;
  className?: string;
}

function Button({ onClick, text, className }: ButtonProps) {
  return (
    <button
      type="button"
      className={cx(styles.block, className)}
      onClick={onClick}
    >
      {text}
    </button>
  );
}

export default memo(Button);
