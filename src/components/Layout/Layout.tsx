import { memo, ReactNode } from 'react';
import cx from 'classnames';
import thumbImage from 'images/thumb.svg';
import styles from './Layout.module.scss';

interface LayoutProps {
  className?: string;
  children: ReactNode;
}

function Layout({ className, children }: LayoutProps) {
  return (
    <div className={cx(styles.block, className)}>
      <div className={styles.imageWrapper}>
        <img src={thumbImage} alt="thumb up" className={styles.image} />
      </div>
      <div className={styles.content}>{children}</div>
    </div>
  );
}

export default memo(Layout);
