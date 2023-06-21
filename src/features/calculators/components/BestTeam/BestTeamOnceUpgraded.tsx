import { BestParts } from '../BestAssets';
import { Heading3 } from '@/components/ui';
import { useTranslation } from 'react-i18next';
import BestDrivers from '../BestAssets/BestDrivers';

const BestTeamOnceUpgraded = () => {
  const { t } = useTranslation(['calculators']);

  return (
    <>
      <Heading3>{t('calculators:bestTeam')}</Heading3>

      <BestDrivers />

      <BestParts />
    </>
  );
};

export default BestTeamOnceUpgraded;
