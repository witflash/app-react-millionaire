import { memo, ReactNode } from 'react';

import styles from './Frame.module.scss';

interface FrameProps {
  children: ReactNode;
}

function Frame({ children }: FrameProps) {
  return <div className={styles.block}>{children}</div>;
}

export default memo(Frame);
