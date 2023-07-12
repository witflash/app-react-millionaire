import { memo, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, GameStatus, changeGameState } from 'store';
import thumbImage from 'images/thumb.svg';
import styles from './WelcomeScreen.module.scss';

function WelcomeScreen() {
  const gameStatus = useSelector((state: RootState) => state.gameStatus.value);
  const dispatch = useDispatch();
  console.log('gameStatus: ', gameStatus);

  const handleStartClick = useCallback(() => {
    dispatch(changeGameState(GameStatus.ongoing));
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
