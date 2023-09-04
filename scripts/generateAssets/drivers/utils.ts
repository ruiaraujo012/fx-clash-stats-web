import { CARDS_NEEDED, RARITY_COINS_COST } from '../utils';
import _cloneDeep from 'lodash.clonedeep';
import _set from 'lodash.set';
import type { Driver, Stat, Upgrade } from './types';

const calculatePercentageToSelectedDriverStat = (
  selectedStatAvg: number,
  eachStatAvg: Omit<Stat, 'upgrade' | 'score' | 'level' | 'statsSum'>,
): number => {
  const selectedDriverStatAvgPercentage =
    (1 -
      selectedStatAvg /
        (eachStatAvg.defending +
          eachStatAvg.overtaking +
          eachStatAvg.qualifying +
          eachStatAvg.raceStart +
          eachStatAvg.tireManagement)) /
    4;

  return selectedDriverStatAvgPercentage;
};

const calculateDriverAvgAndPercentage = (drivers: Driver[]) => {
  const calcSum = (statName: keyof Omit<Stat, 'upgrade' | 'score' | 'level' | 'statsSum'>) =>
    drivers.reduce((acc, driver) => acc + driver.stats.reduce((acc2, stat) => acc2 + stat[statName], 0), 0);

  const numberOfStats = drivers.reduce((acc, driver) => acc + driver.stats.length, 0);

  const allDriversStatsSum = {
    defending: calcSum('defending'),
    overtaking: calcSum('overtaking'),
    qualifying: calcSum('qualifying'),
    raceStart: calcSum('raceStart'),
    tireManagement: calcSum('tireManagement'),
  };

  const eachStatAvg = {
    defending: allDriversStatsSum.defending / numberOfStats,
    overtaking: allDriversStatsSum.overtaking / numberOfStats,
    qualifying: allDriversStatsSum.qualifying / numberOfStats,
    raceStart: allDriversStatsSum.raceStart / numberOfStats,
    tireManagement: allDriversStatsSum.tireManagement / numberOfStats,
  };

  const eachStatAvgPercentage = {
    defending: calculatePercentageToSelectedDriverStat(eachStatAvg.defending, eachStatAvg),
    overtaking: calculatePercentageToSelectedDriverStat(eachStatAvg.overtaking, eachStatAvg),
    qualifying: calculatePercentageToSelectedDriverStat(eachStatAvg.qualifying, eachStatAvg),
    raceStart: calculatePercentageToSelectedDriverStat(eachStatAvg.raceStart, eachStatAvg),
    tireManagement: calculatePercentageToSelectedDriverStat(eachStatAvg.tireManagement, eachStatAvg),
  };

  const driverAvgAndPercentage = {
    ...eachStatAvg,
    percentage: eachStatAvgPercentage,
  };

  return driverAvgAndPercentage;
};

const calculateDriverWeightedScore = (
  driverStatsAvg: Omit<Stat, 'upgrade' | 'score' | 'level' | 'statsSum'> & {
    percentage: Omit<Stat, 'upgrade' | 'score' | 'level' | 'statsSum'>;
  },
  driverStats: Omit<Stat, 'upgrade' | 'score' | 'level' | 'statsSum'>,
) => {
  const defendingWeightedScore = driverStatsAvg.percentage.defending * driverStats.defending;
  const overtakingWeightedScore = driverStatsAvg.percentage.overtaking * driverStats.overtaking;
  const qualifyingWeightedScore = driverStatsAvg.percentage.qualifying * driverStats.qualifying;
  const raceStartWeightedScore = driverStatsAvg.percentage.raceStart * driverStats.raceStart;
  const tireManagementWeightedScore = driverStatsAvg.percentage.tireManagement * driverStats.tireManagement;

  const weightedScore =
    defendingWeightedScore +
    overtakingWeightedScore +
    qualifyingWeightedScore +
    raceStartWeightedScore +
    tireManagementWeightedScore;

  return weightedScore;
};

const calculateDriverUpgrade = (driver: Driver, stat: Stat): Upgrade => ({
  cards: CARDS_NEEDED[stat.level - 1],
  coins: RARITY_COINS_COST[driver.rarity][driver.series - 1][stat.level - 1],
});

const calculateStatsSum = (stat: Stat): number =>
  stat.defending + stat.overtaking + stat.qualifying + stat.raceStart + stat.tireManagement;

export const prepareDriversData = (driver: Driver[]) => {
  const driversToSave = _cloneDeep(driver);

  const allDriversStatsAvgAndPercentage = calculateDriverAvgAndPercentage(driver);

  let maxDriverWeight = 0;

  driversToSave.forEach((driver) => {
    driver.stats.forEach((stat) => {
      const driverWeight = calculateDriverWeightedScore(allDriversStatsAvgAndPercentage, stat);

      if (driverWeight > maxDriverWeight) {
        maxDriverWeight = driverWeight;
      }

      const upgrade = calculateDriverUpgrade(driver, stat);

      if (upgrade.coins === 279000) console.log('upgrade >> ', upgrade);
      const statsSum = calculateStatsSum(stat);

      _set(stat, 'score.weighted', driverWeight);
      _set(stat, 'upgrade', upgrade);
      _set(stat, 'statsSum', statsSum);
    });
  });

  driversToSave.forEach((driver) => {
    driver.stats.forEach((stat) => {
      const percentageMaxScore = stat.score.weighted / maxDriverWeight;

      _set(stat, 'score.percentageToMax', percentageMaxScore);
    });
  });

  return driversToSave;
};
