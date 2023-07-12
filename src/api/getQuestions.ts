import { QuizQuestion } from 'common/types';
import data from './questions.json';

interface GetQuestionsResponse {
  data: QuizQuestion[];
}

export const getQuestions = async (): Promise<GetQuestionsResponse> =>
  new Promise(resolve => {
    setTimeout(() => resolve({ data: data.questions }), 2000);
  });
