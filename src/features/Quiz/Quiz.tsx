import { memo, useState } from 'react';
import { Frame } from 'components/Frame';

import { QuizQuestion } from 'common/types';
import { answerLetters } from 'common/config';
import { useCheckAnswer } from 'common/hooks/useCheckAnswer';
import styles from './Quiz.module.scss';

interface QuizProps {
  question: QuizQuestion;
}

function Quiz({ question }: QuizProps) {
  const [userAnswerId, setUserAnswerId] = useState<number | null>(null);
  const { isCompleted, isCorrect } = useCheckAnswer({ question, userAnswerId });
  console.log('isCompleted, isCorrect: ', isCompleted, isCorrect);

  return (
    <div className={styles.block}>
      <p>{question.text}</p>

      <div>
        {question.answers.map((answer, index) => (
          <button
            type="button"
            key={answer.id}
            onClick={() => setUserAnswerId(answer.id)}
          >
            <Frame>
              <div>
                <span>{answerLetters[index]}</span>
                <span>{answer.text}</span>
              </div>
            </Frame>
          </button>
        ))}
      </div>
    </div>
  );
}

export default memo(Quiz);
