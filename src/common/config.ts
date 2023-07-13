import { QuizStage } from 'common/types';

export const answerLetters = ['A', 'B', 'C', 'D'];

export const LEVEL_EARNINGS: Record<QuizStage, number> = {
  level1: 500,
  level2: 1000,
  level3: 2000,
  level4: 4000,
  level5: 8000,
  level6: 16000,
  level7: 32000,
  level8: 64000,
  level9: 125000,
  level10: 250000,
  level11: 500000,
  level12: 1000000,
};

export const STAGES: QuizStage[] = Object.keys(LEVEL_EARNINGS) as QuizStage[];
