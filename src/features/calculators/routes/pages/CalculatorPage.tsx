import { BestTeam, BestTeamOnceUpgraded } from '../../components';
import { Container, Hr } from '@/components/ui';

const CalculatorPage = () => (
  <Container maxWidth='2xl'>
    <BestTeam />

    <Hr className='my-10' />

    <BestTeamOnceUpgraded />
  </Container>
);

export default CalculatorPage;
