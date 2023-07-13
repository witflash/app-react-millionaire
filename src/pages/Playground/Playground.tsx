import { memo, useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import cx from 'classnames';
import { AppDispatch, fetchQuestions, RootState } from 'store';
import { Quiz } from 'features/Quiz';
import { Burger } from 'components/Burger';
import { Loader } from 'components/Loader';
import { useQuestionByStage } from 'common/hooks/useQuestionByStage';
import styles from './Playground.module.scss';

function Playground() {
  const [isStagesOpened, setIsStagesOpened] = useState(false);
  const { userEarned } = useSelector((state: RootState) => state.gameProcess);
  const { entities: questions, loading } = useSelector(
    (state: RootState) => state.questions,
  );

  const dispatch = useDispatch<AppDispatch>();
  console.log('questions: ', questions);
  console.log('loading: ', loading);

  const { question } = useQuestionByStage({ prevStage: userEarned });

  const toggleMenu = useCallback(() => {
    setIsStagesOpened(state => !state);
  }, []);

  useEffect(() => {
    dispatch(fetchQuestions());
  }, [dispatch]);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className={styles.block}>
      <div className={styles.wrapper}>
        <div className={styles.quiz}>
          <Quiz question={question} />
        </div>

        <div className={cx(styles.stages, isStagesOpened && styles.opened)}>
          <p>Stages</p>
        </div>
      </div>

      <Burger
        className={styles.burger}
        onClick={toggleMenu}
        isOpened={isStagesOpened}
      />
    </div>
  );
}

export default memo(Playground);
