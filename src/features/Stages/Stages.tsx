import { memo } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from 'store';
import { LEVEL_EARNINGS, STAGES } from 'common/config';
import { getNextStage } from 'common/helpers/getNextStage';
import { Stage } from 'components/Stage';
import styles from './Stages.module.scss';

const stages = [...STAGES].reverse();

function Stages() {
  const { userEarned } = useSelector((state: RootState) => state.gameProcess);
  const currentStage = getNextStage(userEarned);

  return (
    <div className={styles.block}>
      {stages.map(stage => (
        <Stage
          key={stage}
          earning={LEVEL_EARNINGS[stage]}
          isCurrent={currentStage === stage}
          isPast={STAGES.indexOf(currentStage) > STAGES.indexOf(stage)}
        />
      ))}
    </div>
  );
}

export default memo(Stages);
