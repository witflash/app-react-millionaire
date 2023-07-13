import { useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeGameStatus, GameStatus, RootState, setUserEarning } from 'store';
import { ID, QuizQuestion } from 'common/types';
import { getNextStage } from 'common/helpers/getNextStage';
import { isLastStage } from 'common/helpers/isLastStage';

interface UseCheckAnswerArg {
  question: QuizQuestion;
  userAnswerId: ID | null;
  onComplete: () => void;
}

interface UseCheckAnswerReturn {
  isCorrect: boolean;
  isCompleted: boolean;
}

export function useCheckAnswer({
  question,
  userAnswerId,
  onComplete,
}: UseCheckAnswerArg): UseCheckAnswerReturn {
  const [isCompleted, setIsCompleted] = useState(false);
  const { userEarned } = useSelector((state: RootState) => state.gameProcess);
  const dispatch = useDispatch();

  const isCorrect = useMemo(
    () =>
      Boolean(userAnswerId && question.correctAnswerIds.includes(userAnswerId)),
    [question, userAnswerId],
  );

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    if (userAnswerId) {
      timeout = setTimeout(() => setIsCompleted(true), 2000);
    }

    return () => clearTimeout(timeout);
  }, [userAnswerId]);

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    if (isCompleted && isCorrect) {
      timeout = setTimeout(() => {
        const nextStage = getNextStage(userEarned);

        dispatch(setUserEarning(nextStage));
        setIsCompleted(false);
        onComplete();

        if (isLastStage(nextStage)) {
          dispatch(changeGameStatus(GameStatus.finished));
        }
      }, 2000);
    }

    if (isCompleted && !isCorrect) {
      timeout = setTimeout(() => {
        dispatch(changeGameStatus(GameStatus.finished));
      }, 2000);
    }

    return () => clearTimeout(timeout);
  }, [isCompleted, isCorrect, userEarned, dispatch, onComplete]);

  return {
    isCorrect,
    isCompleted,
  };
}
