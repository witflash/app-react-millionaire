import { useSelector } from 'react-redux';
import { RootState, GameStatus } from 'store';
import { WelcomeScreen } from 'pages/WelcomeScreen';
import { Playground } from 'pages/Playground';
import { FinalResults } from 'pages/FinalResults';
import 'styles/base.scss';

function App() {
  const gameStatus = useSelector(
    (state: RootState) => state.gameProcess.status,
  );

  return (
    <>
      {gameStatus === GameStatus.upcoming && <WelcomeScreen />}
      {gameStatus === GameStatus.ongoing && <Playground />}
      {gameStatus === GameStatus.finished && <FinalResults />}
    </>
  );
}

export default App;
