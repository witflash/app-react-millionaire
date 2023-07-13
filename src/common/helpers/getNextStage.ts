import { QuizStage } from 'common/types';
import { STAGES } from 'common/config';

export const getNextStage = (prevStage: QuizStage | null) => {
  const nextStageIndex = prevStage ? STAGES.indexOf(prevStage) + 1 : 0;

  return STAGES[nextStageIndex];
};
