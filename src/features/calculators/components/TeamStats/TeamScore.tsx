import { useTranslation } from 'react-i18next';
import TeamStatCard from './TeamStatCard';

interface Props {
  score: string | number;
}

const TeamScore = (props: Props) => {
  const { score } = props;

  const { t } = useTranslation(['calculators']);

  return <TeamStatCard title={t('calculators:teamScore')}>{score} ± 1</TeamStatCard>;
};

export default TeamScore;
