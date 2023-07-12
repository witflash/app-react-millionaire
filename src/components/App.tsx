import { useSelector } from 'react-redux';
import { RootState } from 'store';
import { GameStatus } from 'store/types';
import { WelcomeScreen } from 'components/@sections/WelcomeScreen';
import 'styles/base.scss';

function App() {
  const gameStatus = useSelector((state: RootState) => state.gameStatus.value);

  return (
    <>
      {gameStatus === GameStatus.upcoming && <WelcomeScreen />}
      {gameStatus === GameStatus.ongoing && <p>Game has started</p>}
    </>
  );
}

export default App;
