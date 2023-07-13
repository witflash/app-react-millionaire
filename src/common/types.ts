export type ID = number;

export type QuizStage =
  | 'level1'
  | 'level2'
  | 'level3'
  | 'level4'
  | 'level5'
  | 'level6'
  | 'level7'
  | 'level8'
  | 'level9'
  | 'level10'
  | 'level11'
  | 'level12';

export interface QuizAnswer {
  id: ID;
  text: string;
}

export interface QuizQuestion {
  id: ID;
  text: string;
  answers: QuizAnswer[];
  correctAnswerIds: ID[];
  stage: QuizStage;
}
