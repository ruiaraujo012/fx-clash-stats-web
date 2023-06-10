import { Add, Minus } from 'iconsax-react';
import { twMerge } from 'tailwind-merge';
import { useTranslation } from 'react-i18next';
import IconsaxIcon from '@/lib/IconsaxIcon';
import useCollectedAssetsStore from '@/store/collectedAssetsStore';
import type { Asset } from '@/types';
import type { CollectedAssetsKeys } from '@/store/collectedAssetsStore';

interface Props {
  asset: Asset;
  assetKey: CollectedAssetsKeys;
}

const AssetLevelAndCollectedCards = (props: Props) => {
  const { asset, assetKey } = props;

  const { t } = useTranslation();

  const {
    decreaseCollectedAssetCards,
    increaseCollectedAssetCards,
    updateCollectedAssetLevel,
    updateCollectedAssetCards,
    ...collectedData
  } = useCollectedAssetsStore();
  const selectedAssetCollectedData = collectedData[assetKey][asset.id];

  const isStock = asset.rarity === 'stock';

  let maxLevel = 11;

  switch (asset.rarity) {
    case 'common':
      maxLevel = 11;
      break;

    case 'epic':
      maxLevel = 8;
      break;

    case 'rare':
      maxLevel = 9;
      break;

    case 'stock':
      maxLevel = 0;
      break;

    default:
      maxLevel = 11;
      break;
  }

  /**
   * Render
   */
  return (
    <div className='flex flex-row justify-between gap-5'>
      <div className='w-1/3'>
        <label
          className='text-sm font-medium text-gray-900 dark:text-white'
          htmlFor='level'
        >
          {t('level')}
        </label>

        <select
          className={twMerge(
            'w-full p-1.5 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white',
            isStock ? 'cursor-not-allowed' : '',
          )}
          disabled={isStock}
          id='level'
          onChange={(e) => updateCollectedAssetLevel(assetKey, asset.id, parseInt(e.target.value, 10))}
          value={selectedAssetCollectedData?.level ?? 0}
        >
          {isStock ? (
            <option value={1}>1</option>
          ) : (
            <>
              {[...Array(maxLevel + 1)].map((_, index) => (
                <option
                  key={index}
                  value={index}
                >
                  {index}
                </option>
              ))}
            </>
          )}
        </select>
      </div>

      <div className='w-2/3'>
        <label
          className='text-sm font-medium text-gray-900 dark:text-white'
          htmlFor='cards'
        >
          {t('cards')}
        </label>
        <div className='flex gap-2'>
          <button
            className={twMerge(
              'p-2 text-xs font-medium text-center text-white bg-blue-700 hover:bg-blue-800 focus:outline-none rounded-lg inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700',
              isStock ? 'cursor-not-allowed bg-blue-400 dark:bg-blue-500 hover:bg-blue-400 hover:dark:bg-blue-500' : '',
            )}
            disabled={isStock}
            onClick={() => decreaseCollectedAssetCards(assetKey, asset.id)}
            type='button'
          >
            <IconsaxIcon
              Icon={Minus}
              size={15}
              variant='Linear'
            />
            <span className='sr-only'>Add</span>
          </button>

          <input
            className={twMerge(
              'p-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white',
              isStock ? 'cursor-not-allowed' : '',
            )}
            disabled={isStock}
            id='cards'
            onChange={(e) =>
              updateCollectedAssetCards(
                assetKey,
                asset.id,
                Number.isNaN(e.target.valueAsNumber) ? 0 : e.target.valueAsNumber,
              )
            }
            type='number'
            value={selectedAssetCollectedData?.cards ?? 0}
          />

          <button
            className={twMerge(
              'p-2 text-xs font-medium text-center text-white bg-blue-700 hover:bg-blue-800 focus:outline-none rounded-lg inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700',
              isStock ? 'cursor-not-allowed bg-blue-400 dark:bg-blue-500 hover:bg-blue-400 hover:dark:bg-blue-500' : '',
            )}
            disabled={isStock}
            onClick={() => increaseCollectedAssetCards(assetKey, asset.id)}
            type='button'
          >
            <IconsaxIcon
              Icon={Add}
              size={15}
              variant='Linear'
            />
            <span className='sr-only'>Remove</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default AssetLevelAndCollectedCards;
