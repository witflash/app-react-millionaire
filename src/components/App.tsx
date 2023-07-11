import { Loader } from 'components/Loader';
import { useSelector } from 'react-redux';
import { RootState } from 'store';
import { GameStatus } from 'store/types';

function App() {
  const gameStatus = useSelector((state: RootState) => state.gameStatus.value);

  return (
    <>
      {gameStatus === GameStatus.upcoming && <Loader />}
      {gameStatus === GameStatus.ongoing && <p>Game has started</p>}
    </>
  );
}

export default App;
