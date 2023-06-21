import { Card } from '@/components/ui';
import { useTranslation } from 'react-i18next';
import DefinitionItem from '@/components/DefinitionItem';
import useTeamScore from '../../hooks/useTeamScore';

const TeamScore = () => {
  const { t } = useTranslation(['calculators']);
  const score = useTeamScore();

  return (
    <div className='flex flex-row justify-center w-full'>
      <Card className='max-w-max mb-5'>
        <div className='p-3'>
          <DefinitionItem
            className='text-center'
            term={t('calculators:teamScore')}
          >
            {score}
          </DefinitionItem>
        </div>
      </Card>
    </div>
  );
};

export default TeamScore;
