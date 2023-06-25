import { BestDrivers, BestParts } from '../BestAssets';
import { Heading3 } from '@/components/ui';
import { TeamPartsStats } from '../TeamStats';
import { formatLongNumber } from '@/utils/formatting';
import { useTranslation } from 'react-i18next';
import TeamStatCard from '../TeamStats/TeamStatCard';
import useBestDriversOnceUpgraded from '../../hooks/useBestDriversOnceUpgraded';
import useBestPartsOnceUpgraded from '../../hooks/useBestPartsOnceUpgraded';
import useTeamScore from '../../hooks/useTeamScore';

const BestTeamOnceUpgraded = () => {
  const { t } = useTranslation(['calculators']);

  const bestDriversOnceUpgraded = useBestDriversOnceUpgraded();
  const bestPartsOnceUpgraded = useBestPartsOnceUpgraded();

  const score = useTeamScore(bestDriversOnceUpgraded, bestPartsOnceUpgraded);

  const coinsNeeded =
    (bestDriversOnceUpgraded.upgradeRequirements?.coinsNeeded ?? 0) +
    (bestPartsOnceUpgraded.upgradeRequirements?.coinsNeeded ?? 0);

  return (
    <>
      <Heading3>{t('calculators:bestTeamOnceUpgraded')}</Heading3>

      <div className='flex flex-row justify-center w-full mb-5 gap-5'>
        <TeamStatCard title={t('calculators:teamScore')}>{score}</TeamStatCard>
        <TeamStatCard title={t('calculators:coinsNeeded')}>{formatLongNumber(coinsNeeded)}</TeamStatCard>
      </div>

      <BestDrivers bestDrivers={bestDriversOnceUpgraded} />

      <TeamPartsStats bestParts={bestPartsOnceUpgraded} />

      <BestParts bestParts={bestPartsOnceUpgraded} />
    </>
  );
};

export default BestTeamOnceUpgraded;
