import assetUpgradeRequirements from '@/utils/assetUpgradeRequirements';
import useCollectedAssetsStore from '@/store/collectedAssetsStore';
import type { BestPart, BestPartOnceUpgradedRequirements } from '../types';
import type { Part, PartsCollectedKeys } from '@/features/parts';

type BestPartsOnceReturn = BestPart & BestPartOnceUpgradedRequirements;

const useBestPartOnceUpgraded = (partData: Part[], partKey: PartsCollectedKeys): BestPartsOnceReturn => {
  const collectedParts = useCollectedAssetsStore((data) => data[partKey]);

  const filteredParts = partData.filter((part) =>
    Object.keys(collectedParts)
      .map((key) => parseInt(key, 10))
      .includes(part.id),
  );

  const partsDataForMaxLevelAvailable = filteredParts.map((part) => {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const collectedPartData = collectedParts[part.id]!;

    const partUpgradeRequirements = assetUpgradeRequirements(
      part.stats,
      collectedPartData.level,
      collectedPartData.cards,
    );

    return {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      maxStat: part.stats.find((stat) => partUpgradeRequirements.maxLevelAvailable === stat.level)!,
      part,
      partUpgradeRequirements,
    };
  });

  const [bestPart] = partsDataForMaxLevelAvailable.sort((partA, partB) =>
    partA.maxStat.score.weighted > partB.maxStat.score.weighted ? -1 : 1,
  );

  return {
    asset: bestPart.part,
    score: bestPart.maxStat.score.weighted,
    stat: bestPart.maxStat,
    upgradeRequirements: bestPart.partUpgradeRequirements,
  };
};

export default useBestPartOnceUpgraded;
