import { memo, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { GameStatus, changeGameStatus } from 'store';
import { Layout } from 'components/Layout';
import { Button } from 'components/Button';
import styles from './WelcomeScreen.module.scss';

function WelcomeScreen() {
  const dispatch = useDispatch();

  const handleStartClick = useCallback(() => {
    dispatch(changeGameStatus(GameStatus.ongoing));
  }, [dispatch]);

  return (
    <Layout className={styles.layout}>
      <h1 className={styles.title}>Who wants to be a millionaire?</h1>
      <div>
        <Button
          onClick={handleStartClick}
          text="Start"
          className={styles.button}
        />
      </div>
    </Layout>
  );
}

export default memo(WelcomeScreen);
