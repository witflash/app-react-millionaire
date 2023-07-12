import { useSelector } from 'react-redux';
import { RootState } from 'store';
import { GameStatus } from 'store/types';
import { WelcomeScreen } from 'components/@sections/WelcomeScreen';
import 'styles/base.scss';
import { Playground } from 'components/@sections/Playground';

function App() {
  const gameStatus = useSelector((state: RootState) => state.gameStatus.value);

  return (
    <>
      {gameStatus === GameStatus.upcoming && <WelcomeScreen />}
      {gameStatus === GameStatus.ongoing && <Playground />}
    </>
  );
}

export default App;
