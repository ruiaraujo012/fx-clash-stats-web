import useCollectedAssetsStore from '@/store/collectedAssetsStore';
import type { BestPart } from '../types';
import type { Part, PartsCollectedKeys } from '@/features/parts';

const useBestPart = (partData: Part[], partKey: PartsCollectedKeys) => {
  const collectedParts = useCollectedAssetsStore((data) => data[partKey]);

  const filteredParts = partData.filter((part) =>
    Object.keys(collectedParts)
      .map((key) => parseInt(key, 10))
      .includes(part.id),
  );

  const partsWithCurrentLevelScore: BestPart[] = filteredParts.map((part) => {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const statFound = part.stats.find((stat) => stat.level === collectedParts[part.id].level)!;

    return {
      asset: part,
      score: statFound.score.weighted,
      stat: statFound,
    };
  });

  const bestPart: BestPart = partsWithCurrentLevelScore.reduce(
    (best, part) => (part.score > best.score ? part : best),
    partsWithCurrentLevelScore[0],
  );

  return bestPart;
};

export default useBestPart;
