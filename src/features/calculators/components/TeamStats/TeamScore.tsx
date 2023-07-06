import { Danger } from 'iconsax-react';
import { Tooltip } from 'react-tooltip';
import { useTranslation } from 'react-i18next';
import IconsaxIcon from '@/lib/IconsaxIcon';
import TeamStatCard from './TeamStatCard';

interface Props {
  score: string | number;
}

const TeamScore = (props: Props) => {
  const { score } = props;

  const { t } = useTranslation(['calculators']);

  return (
    <TeamStatCard title={t('calculators:teamScore')}>
      <div className='flex flex-row justify-center items-center gap-2'>
        <IconsaxIcon
          Icon={Danger}
          className='cursor-pointer text-orange-500 dark:text-orange-400'
          data-tooltip-id='team-score-tooltip-id'
          size={20}
        />

        {score}

        <Tooltip
          className='z-50'
          id='team-score-tooltip-id'
          variant='warning'
        >
          <p className='max-md:w-60 w-96'>{t('calculators:error.teamScoreProblem')}</p>
        </Tooltip>
      </div>
    </TeamStatCard>
  );
};

export default TeamScore;
