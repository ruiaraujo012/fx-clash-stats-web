import { Hr } from '../../../../components/ui';
import { useTranslation } from 'react-i18next';
import DefinitionItem from '@/components/DefinitionItem';
import type { DriverStat } from '@/features/drivers';

interface Props {
  stat: DriverStat;
}

const DriverStats = (props: Props) => {
  const { stat } = props;

  const { t } = useTranslation(['drivers']);

  return (
    <div>
      <div className='flex flex-row gap-2 divide-x justify-between divide-gray-200 dark:divide-gray-700'>
        <div className='flex w-1/3 justify-center'>
          <DefinitionItem
            className='text-center'
            term={t('drivers:overtaking')}
          >
            {stat.overtaking}
          </DefinitionItem>
        </div>
        <div className='flex w-1/3 justify-center pl-2'>
          <DefinitionItem
            className='text-center'
            term={t('drivers:defending')}
          >
            {stat.defending}
          </DefinitionItem>
        </div>
        <div className='flex w-1/3 justify-center pl-2'>
          <DefinitionItem
            className='text-center'
            term={t('drivers:qualifying')}
          >
            {stat.qualifying}
          </DefinitionItem>
        </div>
      </div>

      <Hr />

      <div className='flex flex-row gap-2 divide-x justify-between divide-gray-200 dark:divide-gray-700'>
        <div className='flex w-1/2 justify-center'>
          <DefinitionItem
            className='text-center'
            term={t('drivers:raceStart')}
          >
            {stat.raceStart}
          </DefinitionItem>
        </div>
        <div className='flex w-1/2 justify-center pl-2'>
          <DefinitionItem
            className='text-center'
            term={t('drivers:tireManagement')}
          >
            {stat.tireManagement}
          </DefinitionItem>
        </div>
      </div>
    </div>
  );
};

export default DriverStats;
