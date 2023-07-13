import { memo, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { GameStatus, changeGameStatus } from 'store';
import { Layout } from 'components/Layout';
import styles from './WelcomeScreen.module.scss';

function WelcomeScreen() {
  const dispatch = useDispatch();

  const handleStartClick = useCallback(() => {
    dispatch(changeGameStatus(GameStatus.ongoing));
  }, [dispatch]);

  return (
    <Layout className={styles.layout}>
      <h1 className={styles.title}>Who wants to be a millionaire?</h1>
      <button type="button" onClick={handleStartClick}>
        Start
      </button>
    </Layout>
  );
}

export default memo(WelcomeScreen);
