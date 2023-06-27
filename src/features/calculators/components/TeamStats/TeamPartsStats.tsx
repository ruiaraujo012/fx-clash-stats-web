import { useTranslation } from 'react-i18next';
import TeamStatCard from './TeamStatCard';
import type { BestParts as BestPartsType } from '../../types';

interface Props {
  bestParts: BestPartsType;
}

const TeamPartsStats = (props: Props) => {
  const {
    bestParts: {
      sum: { cornering, pitStopTime, powerUnit, reliability, speed },
    },
  } = props;

  const { t } = useTranslation(['parts']);

  return (
    <div className='mb-3'>
      <div className='max-md:hidden flex flex-row gap-2 justify-between w-full'>
        <TeamStatCard title={t('parts:speed')}>{speed}</TeamStatCard>
        <TeamStatCard title={t('parts:powerUnit')}>{powerUnit}</TeamStatCard>
        <TeamStatCard title={t('parts:cornering')}>{cornering}</TeamStatCard>
        <TeamStatCard title={t('parts:reliability')}>{reliability}</TeamStatCard>
        <TeamStatCard title={t('parts:pitStopTime')}>{pitStopTime.toFixed(2)}</TeamStatCard>
      </div>

      <div className='md:hidden flex flex-col gap-2 items-center w-full'>
        <div className='flex flex-row justify-evenly gap-2 w-full'>
          <TeamStatCard title={t('parts:speed')}>{speed}</TeamStatCard>
          <TeamStatCard title={t('parts:powerUnit')}>{powerUnit}</TeamStatCard>
          <TeamStatCard title={t('parts:cornering')}>{cornering}</TeamStatCard>
        </div>
        <div className='flex flex-row justify-evenly gap-2 w-full'>
          <TeamStatCard title={t('parts:reliability')}>{reliability}</TeamStatCard>
          <TeamStatCard title={t('parts:pitStopTime')}>{pitStopTime.toFixed(2)}</TeamStatCard>
        </div>
      </div>
    </div>
  );
};

export default TeamPartsStats;
