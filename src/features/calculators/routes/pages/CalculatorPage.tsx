import { Alert, Container, Hr } from '@/components/ui';
import { BestTeam, BestTeamOnceUpgraded } from '../../components';
import { useTranslation } from 'react-i18next';

const CalculatorPage = () => {
  const { t } = useTranslation(['calculators']);

  return (
    <Container maxWidth='2xl'>
      <Alert severity='warning'>{t('calculators:error.teamScoreProblem')}</Alert>

      <BestTeam />

      <Hr className='my-10' />

      <BestTeamOnceUpgraded />
    </Container>
  );
};

export default CalculatorPage;
