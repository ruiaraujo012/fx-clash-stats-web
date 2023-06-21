import { AssetBoostBadge } from '@/components/Asset';
import { Card } from '@/components/ui';
import { ExportSquare } from 'iconsax-react';
import { twMerge } from 'tailwind-merge';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import IconsaxIcon from '@/lib/IconsaxIcon';
import RarityBadge from '@/components/RarityBadge';
import type { Asset } from '@/types';
import type { ReactNode } from 'react';

interface Props {
  asset: Asset;
  children?: ReactNode | ReactNode[];
}

const BestAssetCard = (props: Props) => {
  const { asset, children } = props;

  const { t } = useTranslation();
  const navigate = useNavigate();

  // TODO: Create store to save boosted assets and respective boost value
  // FIXME:
  const boost = 10;
  // const hasBoost = asset.series === 1;
  const hasBoost = false;

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
      className={hasBoost ? 'border-amber-500 dark:border-amber-500 border-2' : ''}
      key={asset.id}
    >
      <div className='p-3'>
        <div className='flex flex-row justify-between items-center mb-2 gap-2 flex-wrap'>
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

          {hasBoost && <AssetBoostBadge boost={boost} />}
        </div>

        <div className='flex flex-row justify-between items-center mb-3'>
          <p className='font-normal text-gray-700 dark:text-gray-400'>{t('series', { series: asset.series })}</p>

          <RarityBadge rarity={asset.rarity} />
        </div>

        {children}
      </div>
    </Card>
  );
};

export default BestAssetCard;
