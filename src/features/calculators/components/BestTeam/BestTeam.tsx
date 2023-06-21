import { BestDrivers, BestParts } from '../BestAssets';
import { Heading3 } from '@/components/ui';
import { TeamScore } from '../TeamScore';
import { useTranslation } from 'react-i18next';

const BestTeam = () => {
  const { t } = useTranslation(['calculators']);

  return (
    <>
      <Heading3>{t('calculators:bestTeam')}</Heading3>

      <TeamScore />

      <BestDrivers />

      <BestParts />
    </>
  );
};

export default BestTeam;
