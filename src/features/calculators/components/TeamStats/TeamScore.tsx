import { useTranslation } from 'react-i18next';
import TeamStatCard from './TeamStatCard';
import useTeamScore from '../../hooks/useTeamScore';

const TeamScore = () => {
  const { t } = useTranslation(['calculators']);
  const score = useTeamScore();

  return (
    <div className='flex flex-row justify-center w-full mb-5'>
      <TeamStatCard title={t('calculators:teamScore')}>{score}</TeamStatCard>
    </div>
  );
};

export default TeamScore;
