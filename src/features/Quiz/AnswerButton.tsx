import { memo } from 'react';
import cx from 'classnames';
import { Frame } from 'components/Frame';
import { Color } from 'common/types';
import styles from './AnswerButton.module.scss';

interface AnswerButtonProps {
  onClick: () => void;
  letter: string;
  text: string;
  color?: Color;
  isDisabled?: boolean;
}

function AnswerButton({
  onClick,
  letter,
  text,
  color = Color.default,
  isDisabled,
}: AnswerButtonProps) {
  return (
    <button
      type="button"
      className={cx(styles.block, styles[color])}
      onClick={onClick}
      disabled={isDisabled}
    >
      <Frame color={color} hasAnimation>
        <div className={styles.frame}>
          <span className={styles.letter}>{letter}</span>
          <span className={styles.text}>{text}</span>
        </div>
      </Frame>
    </button>
  );
}

export default memo(AnswerButton);
