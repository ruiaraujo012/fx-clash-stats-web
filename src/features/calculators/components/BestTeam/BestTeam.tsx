import { BestDrivers, BestParts } from '../BestAssets';
import { Container, Heading3 } from '@/components/ui';
import { TeamPartsStats, TeamScore } from '../TeamStats';
import { useTranslation } from 'react-i18next';

const BestTeam = () => {
  const { t } = useTranslation(['calculators']);

  return (
    <Container maxWidth='2xl'>
      <Heading3>{t('calculators:bestTeam')}</Heading3>

      <TeamScore />

      <BestDrivers />

      <TeamPartsStats />

      <BestParts />
    </Container>
  );
};

export default BestTeam;
