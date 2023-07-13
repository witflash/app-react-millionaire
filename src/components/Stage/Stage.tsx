import { memo, useMemo } from 'react';
import cx from 'classnames';
import { Frame } from 'components/Frame';
import { Color } from 'common/types';
import styles from './Stage.module.scss';

interface StageProps {
  earning: number;
  isCurrent: boolean;
  isPast: boolean;
}

function Stage({ earning, isCurrent, isPast }: StageProps) {
  const text = useMemo(
    () =>
      new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        maximumFractionDigits: 0,
      }).format(earning),
    [earning],
  );

  return (
    <div className={cx(styles.block, isCurrent && styles.accent)}>
      <div className={styles.wrapper}>
        <Frame color={isCurrent ? Color.accent : Color.default} isOutline>
          <div
            className={cx(
              styles.content,
              isPast && styles.disabled,
              isCurrent && styles.accent,
            )}
          >
            {text}
          </div>
        </Frame>
      </div>
    </div>
  );
}

export default memo(Stage);
