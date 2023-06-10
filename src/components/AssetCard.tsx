import { ArrowUp } from 'iconsax-react';
import { Card } from '@/components/ui/Card';
import { twMerge } from 'tailwind-merge';
import { useTranslation } from 'react-i18next';
import AssetLevelAndCollectedCards from '@/components/AssetLevelAndCollectedCards';
import BoostBadge from '@/components/BoostBadge';
import IconsaxIcon from '@/lib/IconsaxIcon';
import RarityBadge from '@/components/RarityBadge';
import type { Asset, Rarity } from '@/types';

const backgroundColor: { [key in Rarity]: string } = {
  common: 'bg-blue-100 dark:bg-blue-900',
  epic: 'bg-fuchsia-100 dark:bg-fuchsia-900',
  rare: 'bg-orange-100 dark:bg-orange-900',
  stock: 'bg-gray-100 dark:bg-gray-900',
};

interface Props {
  asset: Asset;
}

const AssetCard = (props: Props) => {
  const { asset } = props;

  const { t } = useTranslation();

  // TODO: Create store to save boosted assets and respective boost value
  const boost = 10;
  const hasBoost = asset.series === 2;

  // TODO: Calculate if asset can be upgradable or not (create a hook or a utility function to it)
  const isUpgradable = asset.series === 1;

  return (
    <Card
      cardClassName={hasBoost ? 'border-amber-500 dark:border-amber-500 border-2' : ''}
      key={asset.id}
    >
      <div className={twMerge('h-52 lg:h-60 w-full', backgroundColor[asset.rarity])}>
        {hasBoost && (
          <div className='flex flex-row justify-end p-2'>
            <BoostBadge boost={boost} />
          </div>
        )}
      </div>

      <div className='p-3'>
        <div className='flex flex-row justify-between items-center mb-2'>
          <h5 className='text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>{asset.name}</h5>

          {isUpgradable && (
            <span className='bg-green-100 text-green-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300 flex flex-row items-center gap-1'>
              <IconsaxIcon
                Icon={ArrowUp}
                size={15}
              />
              {t('upgradable')}
            </span>
          )}
        </div>

        <div className='flex flex-row justify-between items-center mb-3'>
          <p className='font-normal text-gray-700 dark:text-gray-400'>{t('series', { series: asset.series })}</p>

          <RarityBadge rarity={asset.rarity} />
        </div>

        <hr className='h-px my-2 bg-gray-200 border-0 dark:bg-gray-700' />

        <AssetLevelAndCollectedCards
          asset={asset}
          assetKey='brakes'
        />
      </div>
    </Card>
  );
};

export default AssetCard;
