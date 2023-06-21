import { Hr } from '../../../../components/ui';
import { useTranslation } from 'react-i18next';
import DefinitionItem from '@/components/DefinitionItem';
import type { PartStat } from '@/features/parts';

interface Props {
  stat: PartStat;
}

const PartStats = (props: Props) => {
  const { stat } = props;

  const { t } = useTranslation(['parts']);

  return (
    <div>
      <div className='flex flex-row gap-2 divide-x justify-between divide-gray-200 dark:divide-gray-700'>
        <div className='flex w-1/3 justify-center'>
          <DefinitionItem
            className='text-center'
            term={t('parts:speed')}
          >
            {stat.speed}
          </DefinitionItem>
        </div>
        <div className='flex w-1/3 justify-center pl-2'>
          <DefinitionItem
            className='text-center'
            term={t('parts:cornering')}
          >
            {stat.cornering}
          </DefinitionItem>
        </div>
        <div className='flex w-1/3 justify-center pl-2'>
          <DefinitionItem
            className='text-center'
            term={t('parts:powerUnit')}
          >
            {stat.powerUnit}
          </DefinitionItem>
        </div>
      </div>

      <Hr />

      <div className='flex flex-row gap-2 divide-x justify-between divide-gray-200 dark:divide-gray-700'>
        <div className='flex w-1/2 justify-center'>
          <DefinitionItem
            className='text-center'
            term={t('parts:reliability')}
          >
            {stat.reliability}
          </DefinitionItem>
        </div>
        <div className='flex w-1/2 justify-center pl-2'>
          <DefinitionItem
            className='text-center'
            term={t('parts:pitStopTime')}
          >
            {stat.pitStopTime}
          </DefinitionItem>
        </div>
      </div>
    </div>
  );
};

export default PartStats;
