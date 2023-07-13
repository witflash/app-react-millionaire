import { QuizQuestion, QuizStage } from 'common/types';
import { useSelector } from 'react-redux';
import { RootState } from 'store';
import { useMemo } from 'react';
import { getNextStage } from 'common/helpers/getNextStage';

interface UseQuestionByStageArg {
  prevStage: QuizStage | null;
}

interface UseQuestionByStageReturn {
  question: QuizQuestion;
}

export function useQuestionByStage({
  prevStage,
}: UseQuestionByStageArg): UseQuestionByStageReturn {
  const questions = useSelector((state: RootState) => state.questions.entities);

  const currentQuestion = useMemo(() => {
    const nextStage = getNextStage(prevStage);

    return (
      questions.find(question => question.stage === nextStage) || questions[0]
    );
  }, [questions, prevStage]);

  return {
    question: currentQuestion,
  };
}
