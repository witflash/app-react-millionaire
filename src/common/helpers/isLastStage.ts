import { QuizStage } from 'common/types';
import { STAGES } from 'common/config';

export const isLastStage = (stage: QuizStage) =>
  STAGES.indexOf(stage) === STAGES.length - 1;
