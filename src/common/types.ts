export type ID = number;

export enum QuizStage {
  level1 = 500,
  level2 = 1000,
  level3 = 2000,
  level4 = 4000,
  level5 = 8000,
  level6 = 16000,
  level7 = 32000,
  level8 = 64000,
  level9 = 125000,
  level10 = 250000,
  level11 = 500000,
  level12 = 1000000,
}

export interface QuizAnswer {
  id: ID;
  text: string;
}

export interface QuizQuestion {
  id: ID;
  text: string;
  answers: QuizAnswer[];
  correctAnswerIds: ID[];
  earning: number;
}
