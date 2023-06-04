import { useMemo } from 'react';
import type { Part, PartLevelStats, PartsReturnType, Test } from '../types';

const brakes: Part[] = [
  {
    name: 'Starter',
    rarity: 'stock',
    series: 0,
    stats: {
      '0': {
        cornering: 1,
        pitStopTime: 1,
        powerUnit: 1,
        reliability: 1,
        speed: 1,
      },
    },
  },
  {
    name: 'Starter 2',
    rarity: 'epic',
    series: 1,
    stats: {
      '0': {
        cornering: 1,
        pitStopTime: 1,
        powerUnit: 1,
        reliability: 1,
        speed: 1,
      },
      '1': {
        cornering: 1,
        pitStopTime: 1,
        powerUnit: 1,
        reliability: 1,
        speed: 1,
      },
      '2': {
        cornering: 1,
        pitStopTime: 1,
        powerUnit: 1,
        reliability: 1,
        speed: 1,
      },
      '3': {
        cornering: 1,
        pitStopTime: 1,
        powerUnit: 1,
        reliability: 1,
        speed: 1,
      },
      '4': {
        cornering: 1,
        pitStopTime: 1,
        powerUnit: 1,
        reliability: 1,
        speed: 1,
      },
      '5': {
        cornering: 1,
        pitStopTime: 1,
        powerUnit: 1,
        reliability: 1,
        speed: 1,
      },
      '6': {
        cornering: 9,
        pitStopTime: 1,
        powerUnit: 1,
        reliability: 1,
        speed: 1,
      },
      '7': {
        cornering: 10,
        pitStopTime: 1,
        powerUnit: 1,
        reliability: 1,
        speed: 1,
      },
      '8': {
        cornering: 10,
        pitStopTime: 22,
        powerUnit: 100,
        reliability: 33,
        speed: 26,
      },
    },
  },
];

const useBrakes = (): PartsReturnType<Part[]> => {
  const { cornering, pitStopTime, powerUnit, reliability, speed } = useMemo((): {
    [key in keyof PartLevelStats]: number;
  } => {
    const sum: { [key in keyof PartLevelStats]: number[] } = {
      cornering: [],
      pitStopTime: [],
      powerUnit: [],
      reliability: [],
      speed: [],
    };

    for (const brake of brakes) {
      for (const key in brake.stats) {
        sum.cornering.push(brake.stats[key as unknown as keyof Test].cornering);
        sum.pitStopTime.push(brake.stats[key as unknown as keyof Test].pitStopTime);
        sum.powerUnit.push(brake.stats[key as unknown as keyof Test].powerUnit);
        sum.reliability.push(brake.stats[key as unknown as keyof Test].reliability);
        sum.speed.push(brake.stats[key as unknown as keyof Test].speed);
      }
    }

    return {
      cornering: sum.cornering.reduce((acc, val) => acc + val, 0) / sum.cornering.length,
      pitStopTime: sum.pitStopTime.reduce((acc, val) => acc + val, 0) / sum.pitStopTime.length,
      powerUnit: sum.powerUnit.reduce((acc, val) => acc + val, 0) / sum.powerUnit.length,
      reliability: sum.reliability.reduce((acc, val) => acc + val, 0) / sum.reliability.length,
      speed: sum.speed.reduce((acc, val) => acc + val, 0) / sum.speed.length,
    };
  }, []);

  return {
    averages: {
      cornering,
      pitStopTime,
      powerUnit,
      reliability,
      speed,
    },
    data: brakes,
  };
};

export default useBrakes;
