import type { BaseStat } from '@/types';

export interface AssetUpgradeRequirements {
  cardsNeeded: number;
  coinsNeeded: number;
  maxLevelAvailable: number;
  remainingCards: number;
}

const assetUpgradeRequirements = (assetStats: BaseStat[], level: number, cards: number): AssetUpgradeRequirements => {
  const upgradeRequirements = assetStats.filter((stat) => stat.level > level).map((stat) => stat.upgrade);

  let remainingCards = cards;
  let maxLevelAvailable = level;
  let coinsNeeded = 0;
  let cardsNeeded = 0;

  upgradeRequirements.some((upgrade) => {
    if (level === 0 && cards === 0) {
      return true;
    }

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
};

export default assetUpgradeRequirements;
