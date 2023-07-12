import { memo } from 'react';
import { Frame } from 'components/Frame';

import { QuizQuestion } from 'common/types';
import styles from './Quiz.module.scss';

interface QuizProps {
  question: QuizQuestion;
}

function Quiz({ question }: QuizProps) {
  return (
    <div className={styles.block}>
      <p>{question.text}</p>
      <Frame>
        <p>Text</p>
      </Frame>
    </div>
  );
}

export default memo(Quiz);
