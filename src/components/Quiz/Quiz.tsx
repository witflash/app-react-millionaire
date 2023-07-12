import { memo } from 'react';
import { Frame } from 'components/Frame';

import styles from './Quiz.module.scss';

function Quiz() {
  return (
    <div className={styles.block}>
      <p>Question</p>
      <Frame>
        <p>Text</p>
      </Frame>
    </div>
  );
}

export default memo(Quiz);
