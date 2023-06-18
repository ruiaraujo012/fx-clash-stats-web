import { formatLongNumber } from '@/utils/formatting';
import { useTranslation } from 'react-i18next';
import DefinitionItem from '@/components/DefinitionItem';

interface Props {
  cardsNeeded: number;
  coinsNeeded: number;
  maxLevelAvailable: number;
}

const AssetUpgradeRequirements = (props: Props) => {
  const { cardsNeeded, coinsNeeded, maxLevelAvailable } = props;

  const { t } = useTranslation();

  return (
    <div className='flex flex-row gap-2 divide-x justify-between divide-gray-200 dark:divide-gray-700'>
      <div className='flex w-1/3 justify-center'>
        <DefinitionItem
          className='text-center'
          term={t('maxLevelAvailable')}
        >
          {maxLevelAvailable}
        </DefinitionItem>
      </div>

      <div className='flex w-1/3 justify-center'>
        <DefinitionItem
          className='text-center'
          term={t('cardsNeeded')}
        >
          {formatLongNumber(cardsNeeded)}
        </DefinitionItem>
      </div>

      <div className='flex w-1/3 justify-center'>
        <DefinitionItem
          className='text-center'
          term={t('coinsNeeded')}
        >
          {formatLongNumber(coinsNeeded)}
        </DefinitionItem>
      </div>
    </div>
  );
};

export default AssetUpgradeRequirements;
