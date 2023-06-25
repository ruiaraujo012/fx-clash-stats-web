import { useMemo } from 'react';
import assetUpgradeRequirements from '@/utils/assetUpgradeRequirements';
import useCollectedAssetsStore from '@/store/collectedAssetsStore';
import type { Asset } from '@/types';
import type { CollectedAssetsKeys } from '@/store/collectedAssetsStore';

const useAssetUpgradeRequirements = (asset: Asset, assetKey: CollectedAssetsKeys) => {
  const selectedCollectedAsset = useCollectedAssetsStore((state) => state[assetKey][asset.id]);
  const { cards = 0, level = 0 } = selectedCollectedAsset ?? {};

  const { cardsNeeded, coinsNeeded, maxLevelAvailable, remainingCards } = useMemo(
    () => assetUpgradeRequirements(asset.stats, level, cards),
    [asset.stats, cards, level],
  );

  const isUpgradable = maxLevelAvailable > level && level !== 0;

  return {
    cardsNeeded,
    coinsNeeded,
    isUpgradable,
    maxLevelAvailable,
    remainingCards,
  };
};

export default useAssetUpgradeRequirements;
