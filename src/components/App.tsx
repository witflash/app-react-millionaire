import { useSelector } from 'react-redux';
import { RootState, GameStatus } from 'store';
import { WelcomeScreen } from 'components/@sections/WelcomeScreen';
import { Playground } from 'components/@sections/Playground';
import { FinalResults } from 'components/@sections/FinalResults';
import 'styles/base.scss';

function App() {
  const gameStatus = useSelector((state: RootState) => state.gameStatus.value);

  return (
    <>
      {gameStatus === GameStatus.upcoming && <WelcomeScreen />}
      {gameStatus === GameStatus.ongoing && <Playground />}
      {gameStatus === GameStatus.finished && <FinalResults />}
    </>
  );
}

export default App;
