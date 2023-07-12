import { memo, useCallback, useState } from 'react';
import cx from 'classnames';
import { Quiz } from 'components/Quiz';

import { Burger } from 'components/@sections/Playground/Burger';
import styles from './Playground.module.scss';

function Playground() {
  const [isStagesOpened, setIsStagesOpened] = useState(false);
  const toggleMenu = useCallback(() => {
    setIsStagesOpened(state => !state);
  }, []);

  return (
    <div className={styles.block}>
      <div className={styles.wrapper}>
        <div className={styles.quiz}>
          <Quiz />
        </div>

        <div className={cx(styles.stages, isStagesOpened && styles.opened)}>
          <p>Stages</p>
        </div>
      </div>
      <div className={styles.burger}>
        <Burger onClick={toggleMenu} isOpened={isStagesOpened} />
      </div>
    </div>
  );
}

export default memo(Playground);
