import { memo, useCallback, useState } from 'react';
import { QuizQuestion } from 'common/types';
import { answerLetters } from 'common/config';
import { useCheckAnswer } from 'common/hooks/useCheckAnswer';
import { AnswerButton } from 'components/AnswerButton';
import { getButtonColor } from './helpers';
import styles from './Quiz.module.scss';

interface QuizProps {
  question: QuizQuestion;
}

function Quiz({ question }: QuizProps) {
  const [userAnswerId, setUserAnswerId] = useState<number | null>(null);
  const clearAnswer = useCallback(() => setUserAnswerId(null), []);

  const { isCompleted, isCorrect } = useCheckAnswer({
    question,
    userAnswerId,
    onComplete: clearAnswer,
  });

  return (
    <div className={styles.block}>
      <p className={styles.question}>{question.text}</p>

      <div className={styles.buttons}>
        {question.answers.map((answer, index) => (
          <AnswerButton
            key={answer.id}
            onClick={() => setUserAnswerId(answer.id)}
            letter={answerLetters[index]}
            text={answer.text}
            color={getButtonColor({
              isSelected: userAnswerId === answer.id,
              isError: userAnswerId === answer.id && isCompleted && !isCorrect,
              isSuccess: userAnswerId === answer.id && isCompleted && isCorrect,
            })}
            isDisabled={Boolean(userAnswerId)}
          />
        ))}
      </div>
    </div>
  );
}

export default memo(Quiz);
