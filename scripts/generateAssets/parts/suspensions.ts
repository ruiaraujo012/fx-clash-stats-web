/* eslint-disable sort-keys */

import { createFile } from '../utils';
import { preparePartData } from './utils';
import type { Part } from './types';

const SUSPENSIONS: Part[] = [
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
    name: 'The Equator',
    rarity: 'rare',
    series: 1,
    stats: [
      {
        level: 1,
        speed: 6,
        cornering: 5,
        powerUnit: 4,
        reliability: 8,
        pitStopTime: 0.88,
      },
      {
        level: 2,
        speed: 8,
        cornering: 7,
        powerUnit: 6,
        reliability: 10,
        pitStopTime: 0.84,
      },
      {
        level: 3,
        speed: 10,
        cornering: 9,
        powerUnit: 8,
        reliability: 11,
        pitStopTime: 0.81,
      },
      {
        level: 4,
        speed: 11,
        cornering: 10,
        powerUnit: 9,
        reliability: 13,
        pitStopTime: 0.78,
      },
      {
        level: 5,
        speed: 13,
        cornering: 12,
        powerUnit: 11,
        reliability: 15,
        pitStopTime: 0.75,
      },
      {
        level: 6,
        speed: 15,
        cornering: 14,
        powerUnit: 13,
        reliability: 16,
        pitStopTime: 0.71,
      },
      {
        level: 7,
        speed: 17,
        cornering: 16,
        powerUnit: 15,
        reliability: 18,
        pitStopTime: 0.68,
      },
      {
        level: 8,
        speed: 18,
        cornering: 17,
        powerUnit: 16,
        reliability: 19,
        pitStopTime: 0.65,
      },
      {
        level: 9,
        speed: 20,
        cornering: 19,
        powerUnit: 18,
        reliability: 21,
        pitStopTime: 0.61,
      },
    ],
  },
  {
    id: 2,
    name: 'Rodeo',
    rarity: 'common',
    series: 3,
    stats: [
      {
        level: 1,
        speed: 8,
        cornering: 7,
        powerUnit: 5,
        reliability: 4,
        pitStopTime: 0.9,
      },
      {
        level: 2,
        speed: 10,
        cornering: 9,
        powerUnit: 6,
        reliability: 5,
        pitStopTime: 0.88,
      },
      {
        level: 3,
        speed: 11,
        cornering: 10,
        powerUnit: 7,
        reliability: 6,
        pitStopTime: 0.86,
      },
      {
        level: 4,
        speed: 13,
        cornering: 12,
        powerUnit: 8,
        reliability: 7,
        pitStopTime: 0.84,
      },
      {
        level: 5,
        speed: 14,
        cornering: 13,
        powerUnit: 9,
        reliability: 8,
        pitStopTime: 0.82,
      },
      {
        level: 6,
        speed: 16,
        cornering: 15,
        powerUnit: 10,
        reliability: 9,
        pitStopTime: 0.8,
      },
      {
        level: 7,
        speed: 17,
        cornering: 16,
        powerUnit: 11,
        reliability: 10,
        pitStopTime: 0.78,
      },
      {
        level: 8,
        speed: 19,
        cornering: 18,
        powerUnit: 12,
        reliability: 11,
        pitStopTime: 0.76,
      },
      {
        level: 9,
        speed: 20,
        cornering: 19,
        powerUnit: 13,
        reliability: 12,
        pitStopTime: 0.73,
      },
      {
        level: 10,
        speed: 22,
        cornering: 21,
        powerUnit: 14,
        reliability: 13,
        pitStopTime: 0.71,
      },
      {
        level: 11,
        speed: 23,
        cornering: 22,
        powerUnit: 15,
        reliability: 14,
        pitStopTime: 0.69,
      },
    ],
  },
  {
    id: 3,
    name: 'Icon V3',
    rarity: 'common',
    series: 4,
    stats: [
      {
        level: 1,
        speed: 8,
        cornering: 4,
        powerUnit: 7,
        reliability: 9,
        pitStopTime: 0.82,
      },
      {
        level: 2,
        speed: 9,
        cornering: 5,
        powerUnit: 8,
        reliability: 11,
        pitStopTime: 0.79,
      },
      {
        level: 3,
        speed: 10,
        cornering: 6,
        powerUnit: 9,
        reliability: 12,
        pitStopTime: 0.76,
      },
      {
        level: 4,
        speed: 11,
        cornering: 7,
        powerUnit: 10,
        reliability: 14,
        pitStopTime: 0.72,
      },
      {
        level: 5,
        speed: 12,
        cornering: 8,
        powerUnit: 11,
        reliability: 15,
        pitStopTime: 0.69,
      },
      {
        level: 6,
        speed: 13,
        cornering: 9,
        powerUnit: 12,
        reliability: 17,
        pitStopTime: 0.66,
      },
      {
        level: 7,
        speed: 14,
        cornering: 10,
        powerUnit: 13,
        reliability: 18,
        pitStopTime: 0.63,
      },
      {
        level: 8,
        speed: 15,
        cornering: 11,
        powerUnit: 14,
        reliability: 20,
        pitStopTime: 0.6,
      },
      {
        level: 9,
        speed: 16,
        cornering: 12,
        powerUnit: 15,
        reliability: 21,
        pitStopTime: 0.57,
      },
      {
        level: 10,
        speed: 17,
        cornering: 13,
        powerUnit: 16,
        reliability: 23,
        pitStopTime: 0.54,
      },
      {
        level: 11,
        speed: 18,
        cornering: 14,
        powerUnit: 17,
        reliability: 24,
        pitStopTime: 0.51,
      },
    ],
  },
  {
    id: 4,
    name: 'Radiance',
    rarity: 'common',
    series: 6,
    stats: [
      {
        level: 1,
        speed: 10,
        cornering: 7,
        powerUnit: 11,
        reliability: 9,
        pitStopTime: 0.86,
      },
      {
        level: 2,
        speed: 12,
        cornering: 8,
        powerUnit: 13,
        reliability: 10,
        pitStopTime: 0.84,
      },
      {
        level: 3,
        speed: 13,
        cornering: 9,
        powerUnit: 14,
        reliability: 11,
        pitStopTime: 0.82,
      },
      {
        level: 4,
        speed: 15,
        cornering: 10,
        powerUnit: 16,
        reliability: 12,
        pitStopTime: 0.8,
      },
      {
        level: 5,
        speed: 16,
        cornering: 11,
        powerUnit: 17,
        reliability: 13,
        pitStopTime: 0.78,
      },
      {
        level: 6,
        speed: 18,
        cornering: 12,
        powerUnit: 19,
        reliability: 14,
        pitStopTime: 0.76,
      },
      {
        level: 7,
        speed: 19,
        cornering: 13,
        powerUnit: 20,
        reliability: 15,
        pitStopTime: 0.73,
      },
      {
        level: 8,
        speed: 21,
        cornering: 14,
        powerUnit: 22,
        reliability: 16,
        pitStopTime: 0.71,
      },
      {
        level: 9,
        speed: 22,
        cornering: 15,
        powerUnit: 23,
        reliability: 17,
        pitStopTime: 0.69,
      },
      {
        level: 10,
        speed: 24,
        cornering: 16,
        powerUnit: 25,
        reliability: 18,
        pitStopTime: 0.67,
      },
      {
        level: 11,
        speed: 25,
        cornering: 17,
        powerUnit: 26,
        reliability: 19,
        pitStopTime: 0.65,
      },
    ],
  },
  {
    id: 5,
    name: 'Horizon',
    rarity: 'epic',
    series: 7,
    stats: [
      {
        level: 1,
        speed: 10,
        cornering: 17,
        powerUnit: 11,
        reliability: 18,
        pitStopTime: 0.78,
      },
      {
        level: 2,
        speed: 12,
        cornering: 20,
        powerUnit: 13,
        reliability: 21,
        pitStopTime: 0.74,
      },
      {
        level: 3,
        speed: 13,
        cornering: 22,
        powerUnit: 15,
        reliability: 23,
        pitStopTime: 0.71,
      },
      {
        level: 4,
        speed: 15,
        cornering: 25,
        powerUnit: 17,
        reliability: 26,
        pitStopTime: 0.67,
      },
      {
        level: 5,
        speed: 17,
        cornering: 28,
        powerUnit: 18,
        reliability: 29,
        pitStopTime: 0.64,
      },
      {
        level: 6,
        speed: 19,
        cornering: 31,
        powerUnit: 20,
        reliability: 32,
        pitStopTime: 0.6,
      },
      {
        level: 7,
        speed: 20,
        cornering: 33,
        powerUnit: 22,
        reliability: 34,
        pitStopTime: 0.57,
      },
      {
        level: 8,
        speed: 22,
        cornering: 36,
        powerUnit: 24,
        reliability: 37,
        pitStopTime: 0.53,
      },
    ],
  },
  {
    id: 6,
    name: 'Presence',
    rarity: 'rare',
    series: 9,
    stats: [
      {
        level: 1,
        speed: 11,
        cornering: 14,
        powerUnit: 12,
        reliability: 10,
        pitStopTime: 0.59,
      },
      {
        level: 2,
        speed: 13,
        cornering: 16,
        powerUnit: 14,
        reliability: 12,
        pitStopTime: 0.54,
      },
      {
        level: 3,
        speed: 14,
        cornering: 17,
        powerUnit: 15,
        reliability: 13,
        pitStopTime: 0.5,
      },
      {
        level: 4,
        speed: 16,
        cornering: 19,
        powerUnit: 17,
        reliability: 15,
        pitStopTime: 0.45,
      },
      {
        level: 5,
        speed: 17,
        cornering: 20,
        powerUnit: 18,
        reliability: 16,
        pitStopTime: 0.4,
      },
      {
        level: 6,
        speed: 19,
        cornering: 22,
        powerUnit: 20,
        reliability: 18,
        pitStopTime: 0.35,
      },
      {
        level: 7,
        speed: 20,
        cornering: 23,
        powerUnit: 21,
        reliability: 19,
        pitStopTime: 0.3,
      },
      {
        level: 8,
        speed: 22,
        cornering: 25,
        powerUnit: 23,
        reliability: 21,
        pitStopTime: 0.25,
      },
      {
        level: 9,
        speed: 23,
        cornering: 26,
        powerUnit: 24,
        reliability: 22,
        pitStopTime: 0.2,
      },
    ],
  },
  {
    id: 7,
    name: 'Sigma',
    rarity: 'epic',
    series: 11,
    stats: [
      {
        level: 1,
        speed: 17,
        cornering: 13,
        powerUnit: 15,
        reliability: 14,
        pitStopTime: 0.69,
      },
      {
        level: 2,
        speed: 19,
        cornering: 15,
        powerUnit: 17,
        reliability: 16,
        pitStopTime: 0.65,
      },
      {
        level: 3,
        speed: 21,
        cornering: 17,
        powerUnit: 19,
        reliability: 18,
        pitStopTime: 0.61,
      },
      {
        level: 4,
        speed: 23,
        cornering: 19,
        powerUnit: 21,
        reliability: 20,
        pitStopTime: 0.56,
      },
      {
        level: 5,
        speed: 26,
        cornering: 22,
        powerUnit: 24,
        reliability: 23,
        pitStopTime: 0.52,
      },
      {
        level: 6,
        speed: 28,
        cornering: 24,
        powerUnit: 26,
        reliability: 25,
        pitStopTime: 0.48,
      },
      {
        level: 7,
        speed: 30,
        cornering: 26,
        powerUnit: 28,
        reliability: 27,
        pitStopTime: 0.43,
      },
      {
        level: 8,
        speed: 32,
        cornering: 28,
        powerUnit: 30,
        reliability: 29,
        pitStopTime: 0.39,
      },
    ],
  },
] as Part[];

const createSuspensions = () => {
  const suspensionsToSave = preparePartData(SUSPENSIONS);

  console.log('Creating suspensions file >>');
  createFile('src/features/parts/constants/suspensions.json', suspensionsToSave);
};

export default createSuspensions;
