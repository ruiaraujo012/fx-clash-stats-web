import { ArrowUp } from 'iconsax-react';
import { Card } from '@/components/ui/Card';
import { useTranslation } from 'react-i18next';
import IconsaxIcon from '@/lib/IconsaxIcon';
import RarityBadge from '@/components/RarityBadge';
import blueColor from '@/assets/blue-color.jpg';
import fuchsiaColor from '@/assets/fuchsia-color.jpg';
import greyColor from '@/assets/grey-color.jpg';
import orangeColor from '@/assets/orange-color.jpg';
import type { Driver, Rarity } from '@/types';
import type { Part } from '../features/parts/types';

const imageColor: { [key in Rarity]: string } = {
  common: blueColor,
  epic: fuchsiaColor,
  rare: orangeColor,
  stock: greyColor,
};

interface Props {
  asset: Part | Driver;
  isUpgradable?: boolean;
}

const AssetCard = (props: Props) => {
  const { asset, isUpgradable = false } = props;

  const { t } = useTranslation();

  return (
    <Card key={asset.id}>
      <img
        alt={asset.name}
        className='h-52 lg:h-60 w-full'
        src={imageColor[asset.rarity]}
      />

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
      </div>
    </Card>
  );
};

export default AssetCard;
