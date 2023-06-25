import { useTranslation } from 'react-i18next';
import TeamStatCard from './TeamStatCard';

interface Props {
  score: string | number;
}

const TeamScore = (props: Props) => {
  const { score } = props;

  const { t } = useTranslation(['calculators']);

  return (
    <div className='flex flex-row justify-center w-full mb-5'>
      <TeamStatCard title={t('calculators:teamScore')}>{score}</TeamStatCard>
    </div>
  );
};

export default TeamScore;
