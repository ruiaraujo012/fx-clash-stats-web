/* eslint-disable sort-keys */
import _cloneDeep from 'lodash.clonedeep';
import _set from 'lodash.set';

import { calculatePartAvgAndPercentage, calculatePartUpgrade, calculatePartWeightedScore } from './utils';
import { createFile } from '../utils';
import type { Part } from './types';

const BRAKES: Part[] = [
  {
    id: 0,
    name: 'Starter',
    rarity: 'stock',
    series: 1,
    stats: [
      {
        level: 1,
        speed: 1,
        cornering: 1,
        powerUnit: 1,
        reliability: 1,
        pitStopTime: 1,
      },
    ],
  },
  {
    id: 1,
    name: 'Essence',
    rarity: 'common',
    series: 1,
    stats: [
      {
        level: 1,
        speed: 5,
        cornering: 4,
        powerUnit: 3,
        reliability: 7,
        pitStopTime: 0.94,
      },
      {
        level: 2,
        speed: 6,
        cornering: 5,
        powerUnit: 4,
        reliability: 9,
        pitStopTime: 0.92,
      },
      {
        level: 3,
        speed: 7,
        cornering: 6,
        powerUnit: 5,
        reliability: 11,
        pitStopTime: 0.9,
      },
      {
        level: 4,
        speed: 8,
        cornering: 7,
        powerUnit: 6,
        reliability: 13,
        pitStopTime: 0.88,
      },
      {
        level: 5,
        speed: 9,
        cornering: 8,
        powerUnit: 7,
        reliability: 15,
        pitStopTime: 0.86,
      },
      {
        level: 6,
        speed: 10,
        cornering: 9,
        powerUnit: 8,
        reliability: 17,
        pitStopTime: 0.84,
      },
      {
        level: 7,
        speed: 11,
        cornering: 10,
        powerUnit: 9,
        reliability: 19,
        pitStopTime: 0.82,
      },
      {
        level: 8,
        speed: 12,
        cornering: 11,
        powerUnit: 10,
        reliability: 21,
        pitStopTime: 0.8,
      },
      {
        level: 9,
        speed: 13,
        cornering: 12,
        powerUnit: 11,
        reliability: 23,
        pitStopTime: 0.78,
      },
      {
        level: 10,
        speed: 14,
        cornering: 13,
        powerUnit: 12,
        reliability: 25,
        pitStopTime: 0.76,
      },
      {
        level: 11,
        speed: 15,
        cornering: 14,
        powerUnit: 13,
        reliability: 27,
        pitStopTime: 0.73,
      },
    ],
  },
  {
    id: 2,
    name: 'Crisis SL',
    rarity: 'rare',
    series: 2,
    stats: [
      {
        level: 1,
        speed: 11,
        cornering: 5,
        powerUnit: 6,
        reliability: 7,
        pitStopTime: 0.84,
      },
      {
        level: 2,
        speed: 13,
        cornering: 6,
        powerUnit: 8,
        reliability: 9,
        pitStopTime: 0.8,
      },
      {
        level: 3,
        speed: 15,
        cornering: 8,
        powerUnit: 9,
        reliability: 10,
        pitStopTime: 0.76,
      },
      {
        level: 4,
        speed: 17,
        cornering: 9,
        powerUnit: 11,
        reliability: 12,
        pitStopTime: 0.71,
      },
      {
        level: 5,
        speed: 19,
        cornering: 11,
        powerUnit: 12,
        reliability: 13,
        pitStopTime: 0.67,
      },
      {
        level: 6,
        speed: 21,
        cornering: 12,
        powerUnit: 14,
        reliability: 15,
        pitStopTime: 0.63,
      },
      {
        level: 7,
        speed: 23,
        cornering: 13,
        powerUnit: 15,
        reliability: 16,
        pitStopTime: 0.59,
      },
      {
        level: 8,
        speed: 25,
        cornering: 15,
        powerUnit: 17,
        reliability: 18,
        pitStopTime: 0.55,
      },
      {
        level: 9,
        speed: 27,
        cornering: 16,
        powerUnit: 18,
        reliability: 19,
        pitStopTime: 0.51,
      },
    ],
  },
  {
    id: 3,
    name: 'Axiom',
    rarity: 'common',
    series: 3,
    stats: [
      {
        level: 1,
        speed: 4,
        cornering: 14,
        powerUnit: 8,
        reliability: 5,
        pitStopTime: 0.88,
      },
      {
        level: 2,
        speed: 5,
        cornering: 16,
        powerUnit: 9,
        reliability: 6,
        pitStopTime: 0.86,
      },
      {
        level: 3,
        speed: 6,
        cornering: 18,
        powerUnit: 10,
        reliability: 7,
        pitStopTime: 0.84,
      },
      {
        level: 4,
        speed: 7,
        cornering: 20,
        powerUnit: 11,
        reliability: 8,
        pitStopTime: 0.82,
      },
      {
        level: 5,
        speed: 8,
        cornering: 22,
        powerUnit: 12,
        reliability: 9,
        pitStopTime: 0.8,
      },
      {
        level: 6,
        speed: 9,
        cornering: 24,
        powerUnit: 13,
        reliability: 10,
        pitStopTime: 0.78,
      },
      {
        level: 7,
        speed: 10,
        cornering: 26,
        powerUnit: 14,
        reliability: 11,
        pitStopTime: 0.76,
      },
      {
        level: 8,
        speed: 11,
        cornering: 28,
        powerUnit: 15,
        reliability: 12,
        pitStopTime: 0.73,
      },
      {
        level: 9,
        speed: 12,
        cornering: 30,
        powerUnit: 16,
        reliability: 13,
        pitStopTime: 0.71,
      },
      {
        level: 10,
        speed: 13,
        cornering: 32,
        powerUnit: 17,
        reliability: 14,
        pitStopTime: 0.69,
      },
      {
        level: 11,
        speed: 14,
        cornering: 34,
        powerUnit: 18,
        reliability: 15,
        pitStopTime: 0.67,
      },
    ],
  },
  {
    id: 4,
    name: 'Wildcore',
    rarity: 'epic',
    series: 5,
    stats: [
      {
        level: 1,
        speed: 17,
        cornering: 11,
        powerUnit: 14,
        reliability: 9,
        pitStopTime: 0.84,
      },
      {
        level: 2,
        speed: 20,
        cornering: 13,
        powerUnit: 17,
        reliability: 11,
        pitStopTime: 0.8,
      },
      {
        level: 3,
        speed: 22,
        cornering: 14,
        powerUnit: 19,
        reliability: 13,
        pitStopTime: 0.77,
      },
      {
        level: 4,
        speed: 25,
        cornering: 16,
        powerUnit: 22,
        reliability: 15,
        pitStopTime: 0.73,
      },
      {
        level: 5,
        speed: 28,
        cornering: 18,
        powerUnit: 25,
        reliability: 16,
        pitStopTime: 0.7,
      },
      {
        level: 6,
        speed: 31,
        cornering: 20,
        powerUnit: 28,
        reliability: 18,
        pitStopTime: 0.66,
      },
      {
        level: 7,
        speed: 33,
        cornering: 21,
        powerUnit: 30,
        reliability: 20,
        pitStopTime: 0.63,
      },
      {
        level: 8,
        speed: 36,
        cornering: 23,
        powerUnit: 33,
        reliability: 22,
        pitStopTime: 0.59,
      },
    ],
  },
  {
    id: 5,
    name: 'Suspense',
    rarity: 'rare',
    series: 8,
    stats: [
      {
        level: 1,
        speed: 9,
        cornering: 15,
        powerUnit: 12,
        reliability: 10,
        pitStopTime: 0.73,
      },
      {
        level: 2,
        speed: 10,
        cornering: 17,
        powerUnit: 13,
        reliability: 11,
        pitStopTime: 0.69,
      },
      {
        level: 3,
        speed: 12,
        cornering: 19,
        powerUnit: 15,
        reliability: 13,
        pitStopTime: 0.64,
      },
      {
        level: 4,
        speed: 13,
        cornering: 21,
        powerUnit: 16,
        reliability: 14,
        pitStopTime: 0.6,
      },
      {
        level: 5,
        speed: 15,
        cornering: 24,
        powerUnit: 18,
        reliability: 16,
        pitStopTime: 0.55,
      },
      {
        level: 6,
        speed: 16,
        cornering: 26,
        powerUnit: 19,
        reliability: 17,
        pitStopTime: 0.51,
      },
      {
        level: 7,
        speed: 17,
        cornering: 28,
        powerUnit: 20,
        reliability: 18,
        pitStopTime: 0.46,
      },
      {
        level: 8,
        speed: 19,
        cornering: 30,
        powerUnit: 22,
        reliability: 20,
        pitStopTime: 0.41,
      },
      {
        level: 9,
        speed: 20,
        cornering: 32,
        powerUnit: 23,
        reliability: 21,
        pitStopTime: 0.37,
      },
    ],
  },
  {
    id: 6,
    name: 'The Warden',
    rarity: 'rare',
    series: 10,
    stats: [
      {
        level: 1,
        speed: 12,
        cornering: 15,
        powerUnit: 14,
        reliability: 11,
        pitStopTime: 0.69,
      },
      {
        level: 2,
        speed: 14,
        cornering: 17,
        powerUnit: 16,
        reliability: 13,
        pitStopTime: 0.66,
      },
      {
        level: 3,
        speed: 16,
        cornering: 18,
        powerUnit: 17,
        reliability: 15,
        pitStopTime: 0.63,
      },
      {
        level: 4,
        speed: 17,
        cornering: 20,
        powerUnit: 19,
        reliability: 16,
        pitStopTime: 0.59,
      },
      {
        level: 5,
        speed: 19,
        cornering: 22,
        powerUnit: 21,
        reliability: 18,
        pitStopTime: 0.56,
      },
      {
        level: 6,
        speed: 21,
        cornering: 23,
        powerUnit: 22,
        reliability: 20,
        pitStopTime: 0.53,
      },
      {
        level: 7,
        speed: 23,
        cornering: 25,
        powerUnit: 24,
        reliability: 22,
        pitStopTime: 0.5,
      },
      {
        level: 8,
        speed: 24,
        cornering: 26,
        powerUnit: 25,
        reliability: 23,
        pitStopTime: 0.46,
      },
      {
        level: 9,
        speed: 26,
        cornering: 28,
        powerUnit: 27,
        reliability: 25,
        pitStopTime: 0.43,
      },
    ],
  },
  {
    id: 7,
    name: 'Onyx',
    rarity: 'epic',
    series: 12,
    stats: [
      {
        level: 1,
        speed: 14,
        cornering: 11,
        powerUnit: 12,
        reliability: 25,
        pitStopTime: 0.76,
      },
      {
        level: 2,
        speed: 16,
        cornering: 13,
        powerUnit: 14,
        reliability: 29,
        pitStopTime: 0.72,
      },
      {
        level: 3,
        speed: 17,
        cornering: 14,
        powerUnit: 16,
        reliability: 32,
        pitStopTime: 0.68,
      },
      {
        level: 4,
        speed: 19,
        cornering: 16,
        powerUnit: 18,
        reliability: 36,
        pitStopTime: 0.64,
      },
      {
        level: 5,
        speed: 21,
        cornering: 18,
        powerUnit: 19,
        reliability: 39,
        pitStopTime: 0.6,
      },
      {
        level: 6,
        speed: 23,
        cornering: 20,
        powerUnit: 21,
        reliability: 43,
        pitStopTime: 0.57,
      },
      {
        level: 7,
        speed: 24,
        cornering: 21,
        powerUnit: 23,
        reliability: 46,
        pitStopTime: 0.53,
      },
      {
        level: 8,
        speed: 26,
        cornering: 23,
        powerUnit: 25,
        reliability: 50,
        pitStopTime: 0.49,
      },
    ],
  },
] as Part[];

const createBrakes = () => {
  const brakesToSave = _cloneDeep(BRAKES);

  const allBrakesStatsAvgAndPercentage = calculatePartAvgAndPercentage(BRAKES);

  let maxBrakeWeight = 0;

  brakesToSave.forEach((brake) => {
    brake.stats.forEach((stat) => {
      const brakeWeight = calculatePartWeightedScore(allBrakesStatsAvgAndPercentage, stat);

      if (brakeWeight > maxBrakeWeight) {
        maxBrakeWeight = brakeWeight;
      }

      const upgrade = calculatePartUpgrade(brake, stat);

      _set(stat, 'score.weighted', brakeWeight);
      _set(stat, 'upgrade', upgrade);
    });
  });

  brakesToSave.forEach((brake) => {
    brake.stats.forEach((stat) => {
      const percentageMaxScore = stat.score.weighted / maxBrakeWeight;

      _set(stat, 'score.percentageToMax', percentageMaxScore);
    });
  });

  console.log('brakesToSave[0] >> ', brakesToSave[1].stats);

  console.log('Creating Brakes file >>');
  createFile('src/features/parts/constants/brakes.json', brakesToSave);
};

export default createBrakes;
