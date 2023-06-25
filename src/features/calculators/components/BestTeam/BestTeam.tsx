import { BestDrivers, BestParts } from '../BestAssets';
import { Container, Heading3 } from '@/components/ui';
import { TeamPartsStats, TeamScore } from '../TeamStats';
import { useTranslation } from 'react-i18next';
import useBestDrivers from '../../hooks/useBestDrivers';
import useBestParts from '../../hooks/useBestParts';
import useTeamScore from '../../hooks/useTeamScore';

const BestTeam = () => {
  const { t } = useTranslation(['calculators']);

  const bestDrivers = useBestDrivers();
  const bestParts = useBestParts();

  const score = useTeamScore(bestDrivers, bestParts);

  return (
    <Container maxWidth='2xl'>
      <Heading3>{t('calculators:bestTeam')}</Heading3>

      <TeamScore score={score} />

      <BestDrivers bestDrivers={bestDrivers} />

      <TeamPartsStats bestParts={bestParts} />

      <BestParts bestParts={bestParts} />
    </Container>
  );
};

export default BestTeam;
