import { useDrivers } from '@/features/drivers';
import useCollectedAssetsStore from '@/store/collectedAssetsStore';
import type { BestDriver } from '../types';

type BestDriversReturn =
  | { hasTwoDrivers: true; driver1: BestDriver; driver2: BestDriver }
  | { hasTwoDrivers: false; driver1: undefined; driver2: undefined };

const useBestDrivers = (): BestDriversReturn => {
  const drivers = useDrivers();
  const collectedDrivers = useCollectedAssetsStore((data) => data.drivers);

  const filteredDrivers = drivers.filter((driver) =>
    Object.keys(collectedDrivers)
      .map((key) => parseInt(key, 10))
      .includes(driver.id),
  );

  if (filteredDrivers.length < 2) {
    return { driver1: undefined, driver2: undefined, hasTwoDrivers: false };
  }

  const driversWithCurrentLevelScore: BestDriver[] = filteredDrivers.map((driver) => {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const statFound = driver.stats.find((stat) => stat.level === collectedDrivers[driver.id].level)!;

    return {
      asset: driver,
      score: statFound.score.weighted,
      stat: statFound,
    };
  });

  const [driver1, driver2] = driversWithCurrentLevelScore.sort((bestDriverA, bestDriverB) =>
    bestDriverA.score > bestDriverB.score ? -1 : 1,
  );

  return {
    driver1,
    driver2,
    hasTwoDrivers: true,
  };
};

export default useBestDrivers;
