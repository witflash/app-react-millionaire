import { memo, useCallback, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeGameStatus, GameStatus, RootState, setUserEarning } from 'store';
import { Layout } from 'components/Layout';
import { LEVEL_EARNINGS } from 'common/config';
import { Button } from 'components/Button';
import styles from './FinalResults.module.scss';

function FinalResults() {
  const { userEarned } = useSelector((state: RootState) => state.gameProcess);
  const dispatch = useDispatch();

  const handleRestartClick = useCallback(() => {
    dispatch(changeGameStatus(GameStatus.ongoing));
    dispatch(setUserEarning(null));
  }, [dispatch]);

  const earnedAmount = useMemo(() => {
    if (!userEarned) {
      return 0;
    }

    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0,
    }).format(LEVEL_EARNINGS[userEarned]);
  }, [userEarned]);

  return (
    <Layout>
      <div>
        <p className={styles.subtitle}>Total score:</p>
        <h2 className={styles.title}>
          {earnedAmount
            ? `${earnedAmount} earned`
            : 'You have earned nothing :('}
        </h2>
      </div>
      <div>
        <Button
          onClick={handleRestartClick}
          text="Try again"
          className={styles.button}
        />
      </div>
    </Layout>
  );
}

export default memo(FinalResults);
