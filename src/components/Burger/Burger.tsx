import cx from 'classnames';
import styles from './Burger.module.scss';

interface BurgerProps {
  className?: string;
  onClick: () => void;
  isOpened: boolean;
}

export function Burger({ className, onClick, isOpened }: BurgerProps) {
  return (
    <button
      type="button"
      className={cx(styles.block, className, isOpened && styles.opened)}
      onClick={onClick}
    >
      <span className={cx(styles.line, styles.line1)} />
      <span className={cx(styles.line, styles.line2)} />
      <span className={cx(styles.line, styles.line3)} />
    </button>
  );
}
