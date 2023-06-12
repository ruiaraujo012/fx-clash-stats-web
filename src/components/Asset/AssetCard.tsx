import { ArrowUp, ExportSquare } from 'iconsax-react';
import { AssetBoostBadge, AssetLevelAndCollectedCards, AssetUpgradeRequirements } from '@/components/Asset';
import { Card } from '@/components/ui/Card';
import { twMerge } from 'tailwind-merge';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import IconsaxIcon from '@/lib/IconsaxIcon';
import RarityBadge from '@/components/RarityBadge';
import useAssetUpgradeRequirements from '@/hooks/useAssetUpgradeRequirements';
import type { Asset, Rarity } from '@/types';
import type { CollectedAssetsKeys } from '@/store/collectedAssetsStore';

const backgroundColor: { [key in Rarity]: string } = {
  common: 'bg-blue-100 dark:bg-blue-900',
  epic: 'bg-fuchsia-100 dark:bg-fuchsia-900',
  rare: 'bg-orange-100 dark:bg-orange-900',
  stock: 'bg-gray-100 dark:bg-gray-900',
};

interface Props {
  asset: Asset;
  assetKey: CollectedAssetsKeys;
}

const AssetCard = (props: Props) => {
  const { asset, assetKey } = props;

  const { t } = useTranslation();
  const navigate = useNavigate();
  const { coinsNeeded, isUpgradable, maxLevelAvailable, cardsNeeded } = useAssetUpgradeRequirements(asset, assetKey);

  // TODO: Create store to save boosted assets and respective boost value
  // FIXME:
  const boost = 10;
  const hasBoost = asset.series === 2;

  const isStock = asset.rarity === 'stock';

  /**
   * Methods
   */
  const handleClickCard = () => {
    if (!isStock) {
      navigate(asset.id.toString());
    }
  };

  /**
   * Render
   */
  return (
    <Card
      cardClassName={hasBoost ? 'border-amber-500 dark:border-amber-500 border-2' : ''}
      key={asset.id}
      onClick={() => console.log('asset >> ', asset)}
    >
      <div className={twMerge('h-52 lg:h-60 w-full', backgroundColor[asset.rarity])}>
        {hasBoost && (
          <div className='flex flex-row justify-end p-2'>
            <AssetBoostBadge boost={boost} />
          </div>
        )}
      </div>

      <div className='p-3'>
        <div className='flex flex-row justify-between items-center mb-2'>
          <button
            className={twMerge(
              'flex flex-row items-center gap-2 text-gray-900 dark:text-white',
              isStock ? 'cursor-not-allowed' : 'hover:underline hover:text-blue-600 hover:dark:text-blue-500',
            )}
            onClick={handleClickCard}
          >
            <h5 className='text-2xl font-bold tracking-tight'>{asset.name} </h5>
            {!isStock && (
              <IconsaxIcon
                Icon={ExportSquare}
                size={20}
              />
            )}
          </button>

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

        <AssetUpgradeRequirements
          cardsNeeded={cardsNeeded}
          coinsNeeded={coinsNeeded}
          maxLevelAvailable={maxLevelAvailable}
        />

        <hr className='h-px my-2 bg-gray-200 border-0 dark:bg-gray-700' />

        <AssetLevelAndCollectedCards
          asset={asset}
          assetKey={assetKey}
        />
      </div>
    </Card>
  );
};

export default AssetCard;
