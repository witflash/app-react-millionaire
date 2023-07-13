import { memo, ReactNode } from 'react';
import cx from 'classnames';
import { Color } from 'common/types';
import styles from './Frame.module.scss';

interface FrameProps {
  children: ReactNode;
  className?: string;
  color?: Color;
  hasAnimation?: boolean;
  isOutline?: boolean;
}

function Frame({
  children,
  className,
  color = Color.default,
  hasAnimation = false,
  isOutline = false,
}: FrameProps) {
  return (
    <div className={cx(styles.block, className)}>
      <svg
        viewBox="0 0 373 72"
        className={cx(
          styles.svg,
          styles[color],
          hasAnimation && styles.animated,
          isOutline && styles.outline,
        )}
        preserveAspectRatio="none"
      >
        <path
          d="M22.7172 5.28344C24.8781 2.28016 28.3521 0.5 32.052 0.5H340.948C344.648 0.5 348.122 2.28016
         350.283 5.28344L372.384 36L350.283 66.7166C348.122 69.7198 344.648 71.5 340.948 71.5H32.052C28.3521 71.5
          24.8781 69.7198 22.7172 66.7166L0.615976 36L22.7172 5.28344Z"
        />
      </svg>
      <div className={styles.content}>{children}</div>
    </div>
  );
}

export default memo(Frame);
