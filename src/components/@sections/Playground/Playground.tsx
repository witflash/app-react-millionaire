import { memo, useCallback, useEffect, useState } from 'react';
import cx from 'classnames';
import { Quiz } from 'components/Quiz';

import { Burger } from 'components/@sections/Playground/Burger';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, fetchQuestions, RootState } from 'store';
import { Loader } from 'components/Loader';
import styles from './Playground.module.scss';

function Playground() {
  const [isStagesOpened, setIsStagesOpened] = useState(false);
  const { entities: questions, loading } = useSelector(
    (state: RootState) => state.questions,
  );
  const dispatch = useDispatch<AppDispatch>();
  console.log('questions: ', questions);
  console.log('loading: ', loading);

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
          <Quiz
            question={{
              id: 1,
              text: 'Test',
              answers: [{ id: 1, text: 'Answer' }],
              correctAnswerIds: [1],
              earning: 500,
            }}
          />
        </div>

        <div className={cx(styles.stages, isStagesOpened && styles.opened)}>
          <p>Stages</p>
        </div>
      </div>
      <div className={styles.burger}>
        <Burger onClick={toggleMenu} isOpened={isStagesOpened} />
      </div>
    </div>
  );
}

export default memo(Playground);
