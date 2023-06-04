import { CARDS_NEEDED, RARITY_COINS_COST } from '../utils';
import type { Part, Stat, Upgrade } from './types';

export const calculatePartUpgrade = (part: Part, stat: Stat): Upgrade => {
  if (part.rarity === 'stock') {
    return {
      cards: 0,
      coins: 0,
    };
  }

  return {
    cards: CARDS_NEEDED[stat.level - 1],
    coins:
      RARITY_COINS_COST[part.rarity][stat.level - 1] +
      RARITY_COINS_COST[part.rarity][stat.level - 1] * (part.series - 1) * 0.1,
  };
};

const calculatePercentageToSelectedPartStat = (
  selectedStatAvg: number,
  eachStatAvg: Omit<Stat, 'upgrade' | 'score' | 'level'>,
): number => {
  const selectedPartStatAvgPercentage =
    (1 -
      selectedStatAvg /
        (eachStatAvg.cornering +
          eachStatAvg.pitStopTime +
          eachStatAvg.powerUnit +
          eachStatAvg.reliability +
          eachStatAvg.speed)) /
    4;

  return selectedPartStatAvgPercentage;
};

export const calculatePartAvgAndPercentage = (parts: Part[]) => {
  const calcSum = (statName: keyof Omit<Stat, 'upgrade' | 'score' | 'level'>) =>
    parts.reduce((acc, part) => acc + part.stats.reduce((acc2, stat) => acc2 + stat[statName], 0), 0);

  const numberOfStats = parts.reduce((acc, part) => acc + part.stats.length, 0);

  const allPartsStatsSum = {
    cornering: calcSum('cornering'),
    pitStopTime: calcSum('pitStopTime'),
    powerUnit: calcSum('powerUnit'),
    reliability: calcSum('reliability'),
    speed: calcSum('speed'),
  };

  const eachStatAvg = {
    cornering: allPartsStatsSum.cornering / numberOfStats,
    pitStopTime: allPartsStatsSum.pitStopTime / numberOfStats,
    powerUnit: allPartsStatsSum.powerUnit / numberOfStats,
    reliability: allPartsStatsSum.reliability / numberOfStats,
    speed: allPartsStatsSum.speed / numberOfStats,
  };

  const eachStatAvgPercentage = {
    cornering: calculatePercentageToSelectedPartStat(eachStatAvg.cornering, eachStatAvg),
    pitStopTime: calculatePercentageToSelectedPartStat(eachStatAvg.pitStopTime, eachStatAvg),
    powerUnit: calculatePercentageToSelectedPartStat(eachStatAvg.powerUnit, eachStatAvg),
    reliability: calculatePercentageToSelectedPartStat(eachStatAvg.reliability, eachStatAvg),
    speed: calculatePercentageToSelectedPartStat(eachStatAvg.speed, eachStatAvg),
  };

  const partAvgAndPercentage = {
    ...eachStatAvg,
    percentage: eachStatAvgPercentage,
  };

  return partAvgAndPercentage;
};

export const calculatePartWeightedScore = (
  partStatsAvg: Omit<Stat, 'upgrade' | 'score' | 'level'> & { percentage: Omit<Stat, 'upgrade' | 'score' | 'level'> },
  partStats: Omit<Stat, 'upgrade' | 'score' | 'level'>,
) => {
  const speedWeightedScore = partStatsAvg.percentage.speed * (partStats.speed - partStats.pitStopTime);
  const corneringWeightedScore = partStatsAvg.percentage.cornering * (partStats.cornering - partStats.pitStopTime);
  const powerUnitWeightedScore = partStatsAvg.percentage.powerUnit * (partStats.powerUnit - partStats.pitStopTime);
  const reliabilityWeightedScore =
    partStatsAvg.percentage.reliability * (partStats.reliability - partStats.pitStopTime);

  const weightedScore = speedWeightedScore + corneringWeightedScore + powerUnitWeightedScore + reliabilityWeightedScore;

  return weightedScore;
};
