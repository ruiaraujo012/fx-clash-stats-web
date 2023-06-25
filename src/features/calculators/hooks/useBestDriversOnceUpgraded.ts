import { useDrivers } from '@/features/drivers';
import assetUpgradeRequirements from '@/utils/assetUpgradeRequirements';
import useCollectedAssetsStore from '@/store/collectedAssetsStore';
import type { BestDrivers, BestPartOnceUpgradedRequirements } from '../types';

type BestDriversOnceUpgradedReturn = BestDrivers & BestPartOnceUpgradedRequirements;

const useBestDriversOnceUpgraded = (): BestDriversOnceUpgradedReturn => {
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

  const driversDataForMaxLevelAvailable = filteredDrivers.map((driver) => {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const collectedDriverData = collectedDrivers[driver.id]!;

    const driverUpgradeRequirements = assetUpgradeRequirements(
      driver.stats,
      collectedDriverData.level,
      collectedDriverData.cards,
    );

    return {
      driver,
      driverUpgradeRequirements,
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      maxStat: driver.stats.find((stat) => driverUpgradeRequirements.maxLevelAvailable === stat.level)!,
    };
  });

  const [driver1, driver2] = driversDataForMaxLevelAvailable.sort((bestDriverA, bestDriverB) =>
    bestDriverA.maxStat.score.weighted > bestDriverB.maxStat.score.weighted ? -1 : 1,
  );

  return {
    driver1: {
      asset: driver1.driver,
      score: driver1.maxStat.score.weighted,
      stat: driver1.maxStat,
    },
    driver2: {
      asset: driver2.driver,
      score: driver2.maxStat.score.weighted,
      stat: driver2.maxStat,
    },
    hasTwoDrivers: true,
    upgradeRequirements: {
      coinsNeeded: driver1.driverUpgradeRequirements.coinsNeeded + driver2.driverUpgradeRequirements.coinsNeeded,
    },
  };
};

export default useBestDriversOnceUpgraded;
