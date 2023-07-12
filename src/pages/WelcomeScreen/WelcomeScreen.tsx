import { memo, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { GameStatus, changeGameStatus } from 'store';
import thumbImage from 'images/thumb.svg';
import styles from './WelcomeScreen.module.scss';

function WelcomeScreen() {
  const dispatch = useDispatch();

  const handleStartClick = useCallback(() => {
    dispatch(changeGameStatus(GameStatus.ongoing));
  }, [dispatch]);

  return (
    <div className={styles.block}>
      <div>
        <img src={thumbImage} alt="thumb up" className={styles.image} />
      </div>
      <div>
        <h1 className={styles.title}>Who wants to be a millionaire?</h1>
        <button type="button" onClick={handleStartClick}>
          Start
        </button>
      </div>
    </div>
  );
}

export default memo(WelcomeScreen);
