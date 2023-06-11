import { useMemo } from 'react';
import useCollectedAssetsStore from '@/store/collectedAssetsStore';
import type { Asset } from '@/types';
import type { CollectedAssetsKeys } from '@/store/collectedAssetsStore';

const useAssetUpgradeRequirements = (asset: Asset, assetKey: CollectedAssetsKeys) => {
  const selectedCollectedAsset = useCollectedAssetsStore((state) => state[assetKey][asset.id]);
  const { cards = 0, level = 0 } = selectedCollectedAsset ?? {};

  const { cardsNeeded, coinsNeeded, maxLevelAvailable, remainingCards } = useMemo(() => {
    const upgradeRequirements = asset.stats.filter((stat) => stat.level > level).map((stat) => stat.upgrade);

    let remainingCards = cards;
    let maxLevelAvailable = level;
    let coinsNeeded = 0;
    let cardsNeeded = 0;

    upgradeRequirements.some((upgrade) => {
      if (upgrade.cards > remainingCards) {
        return true;
      }

      remainingCards -= upgrade.cards;
      maxLevelAvailable++;
      coinsNeeded += upgrade.coins;
      cardsNeeded += upgrade.cards;

      return false;
    });

    return { cardsNeeded, coinsNeeded, maxLevelAvailable, remainingCards };
  }, [asset.stats, cards, level]);

  const isUpgradable = maxLevelAvailable > level;

  return {
    cardsNeeded,
    coinsNeeded,
    isUpgradable,
    maxLevelAvailable,
    remainingCards,
  };
};

export default useAssetUpgradeRequirements;
