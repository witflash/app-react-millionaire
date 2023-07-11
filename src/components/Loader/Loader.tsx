import { useDispatch, useSelector } from 'react-redux';
import { RootState, GameStatus, changeGameState } from 'store';
import styles from './Loader.module.scss';

function Loader() {
  const gameStatus = useSelector((state: RootState) => state.gameStatus.value);
  const dispatch = useDispatch();
  console.log('gameStatus: ', gameStatus);

  return (
    <div>
      <div className={styles.block}>Loading...</div>
      <button
        type="button"
        onClick={() => dispatch(changeGameState(GameStatus.ongoing))}
      >
        START
      </button>
    </div>
  );
}

export default Loader;
