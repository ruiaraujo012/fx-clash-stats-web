import { BestDrivers, BestParts } from '../BestAssets';
import { Heading3 } from '@/components/ui';
import { TeamPartsStats, TeamScore } from '../TeamStats';
import { useTranslation } from 'react-i18next';
import useBestDriversOnceUpgraded from '../../hooks/useBestDriversOnceUpgraded';
import useBestParts from '../../hooks/useBestParts';
import useTeamScore from '../../hooks/useTeamScore';

const BestTeamOnceUpgraded = () => {
  const { t } = useTranslation(['calculators']);

  const bestOnceUpgradedDrivers = useBestDriversOnceUpgraded();
  const bestParts = useBestParts();

  const score = useTeamScore(bestOnceUpgradedDrivers, bestParts);

  return (
    <>
      <Heading3>{t('calculators:bestTeamOnceUpgraded')}</Heading3>

      <TeamScore score={score} />

      <BestDrivers bestDrivers={bestOnceUpgradedDrivers} />

      <TeamPartsStats bestParts={bestParts} />

      <BestParts bestParts={bestParts} />
    </>
  );
};

export default BestTeamOnceUpgraded;
