import { useTranslation } from 'react-i18next';
import TeamStatCard from './TeamStatCard';
import useBestParts from '../../hooks/useBestParts';

const TeamPartsStats = () => {
  const { t } = useTranslation(['parts']);

  const {
    sum: { cornering, pitStopTime, powerUnit, reliability, speed },
  } = useBestParts();

  return (
    <div className='flex flex-row gap-2 justify-between w-full mb-3'>
      <TeamStatCard title={t('parts:speed')}>{speed}</TeamStatCard>
      <TeamStatCard title={t('parts:powerUnit')}>{powerUnit}</TeamStatCard>
      <TeamStatCard title={t('parts:cornering')}>{cornering}</TeamStatCard>
      <TeamStatCard title={t('parts:reliability')}>{reliability}</TeamStatCard>
      <TeamStatCard title={t('parts:pitStopTime')}>{pitStopTime}</TeamStatCard>
    </div>
  );
};

export default TeamPartsStats;
