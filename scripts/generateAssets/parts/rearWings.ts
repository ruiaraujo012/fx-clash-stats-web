/* eslint-disable sort-keys */

import { createFile } from '../utils';
import { preparePartData } from './utils';
import type { Part } from './types';

const REAR_WINGS: Part[] = [
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
    name: 'Phantom-X',
    rarity: 'common',
    series: 1,
    stats: [
      {
        level: 1,
        speed: 8,
        cornering: 6,
        powerUnit: 3,
        reliability: 2,
        pitStopTime: 0.94,
      },
      {
        level: 2,
        speed: 10,
        cornering: 7,
        powerUnit: 4,
        reliability: 3,
        pitStopTime: 0.92,
      },
      {
        level: 3,
        speed: 12,
        cornering: 8,
        powerUnit: 5,
        reliability: 4,
        pitStopTime: 0.9,
      },
      {
        level: 4,
        speed: 14,
        cornering: 9,
        powerUnit: 6,
        reliability: 5,
        pitStopTime: 0.88,
      },
      {
        level: 5,
        speed: 16,
        cornering: 10,
        powerUnit: 7,
        reliability: 6,
        pitStopTime: 0.86,
      },
      {
        level: 6,
        speed: 18,
        cornering: 11,
        powerUnit: 8,
        reliability: 7,
        pitStopTime: 0.84,
      },
      {
        level: 7,
        speed: 20,
        cornering: 12,
        powerUnit: 9,
        reliability: 8,
        pitStopTime: 0.82,
      },
      {
        level: 8,
        speed: 22,
        cornering: 13,
        powerUnit: 10,
        reliability: 9,
        pitStopTime: 0.8,
      },
      {
        level: 9,
        speed: 24,
        cornering: 14,
        powerUnit: 11,
        reliability: 10,
        pitStopTime: 0.78,
      },
      {
        level: 10,
        speed: 26,
        cornering: 15,
        powerUnit: 12,
        reliability: 11,
        pitStopTime: 0.76,
      },
      {
        level: 11,
        speed: 28,
        cornering: 16,
        powerUnit: 13,
        reliability: 12,
        pitStopTime: 0.73,
      },
    ],
  },
  {
    id: 2,
    name: 'The Matador',
    rarity: 'common',
    series: 2,
    stats: [
      {
        level: 1,
        speed: 8,
        cornering: 5,
        powerUnit: 7,
        reliability: 6,
        pitStopTime: 0.94,
      },
      {
        level: 2,
        speed: 9,
        cornering: 6,
        powerUnit: 8,
        reliability: 7,
        pitStopTime: 0.91,
      },
      {
        level: 3,
        speed: 10,
        cornering: 7,
        powerUnit: 9,
        reliability: 8,
        pitStopTime: 0.89,
      },
      {
        level: 4,
        speed: 12,
        cornering: 9,
        powerUnit: 11,
        reliability: 10,
        pitStopTime: 0.87,
      },
      {
        level: 5,
        speed: 13,
        cornering: 10,
        powerUnit: 12,
        reliability: 11,
        pitStopTime: 0.84,
      },
      {
        level: 6,
        speed: 14,
        cornering: 11,
        powerUnit: 13,
        reliability: 12,
        pitStopTime: 0.82,
      },
      {
        level: 7,
        speed: 15,
        cornering: 12,
        powerUnit: 14,
        reliability: 13,
        pitStopTime: 0.79,
      },
      {
        level: 8,
        speed: 16,
        cornering: 13,
        powerUnit: 15,
        reliability: 14,
        pitStopTime: 0.77,
      },
      {
        level: 9,
        speed: 18,
        cornering: 15,
        powerUnit: 17,
        reliability: 16,
        pitStopTime: 0.74,
      },
      {
        level: 10,
        speed: 19,
        cornering: 16,
        powerUnit: 18,
        reliability: 17,
        pitStopTime: 0.72,
      },
      {
        level: 11,
        speed: 20,
        cornering: 17,
        powerUnit: 19,
        reliability: 18,
        pitStopTime: 0.69,
      },
    ],
  },
  {
    id: 3,
    name: 'The Wasp',
    rarity: 'common',
    series: 4,
    stats: [
      {
        level: 1,
        speed: 7,
        cornering: 10,
        powerUnit: 9,
        reliability: 5,
        pitStopTime: 0.88,
      },
      {
        level: 2,
        speed: 8,
        cornering: 12,
        powerUnit: 11,
        reliability: 6,
        pitStopTime: 0.86,
      },
      {
        level: 3,
        speed: 9,
        cornering: 13,
        powerUnit: 12,
        reliability: 7,
        pitStopTime: 0.84,
      },
      {
        level: 4,
        speed: 10,
        cornering: 15,
        powerUnit: 14,
        reliability: 8,
        pitStopTime: 0.82,
      },
      {
        level: 5,
        speed: 11,
        cornering: 16,
        powerUnit: 15,
        reliability: 9,
        pitStopTime: 0.8,
      },
      {
        level: 6,
        speed: 12,
        cornering: 18,
        powerUnit: 17,
        reliability: 10,
        pitStopTime: 0.78,
      },
      {
        level: 7,
        speed: 13,
        cornering: 19,
        powerUnit: 18,
        reliability: 11,
        pitStopTime: 0.76,
      },
      {
        level: 8,
        speed: 14,
        cornering: 21,
        powerUnit: 20,
        reliability: 12,
        pitStopTime: 0.73,
      },
      {
        level: 9,
        speed: 15,
        cornering: 22,
        powerUnit: 21,
        reliability: 13,
        pitStopTime: 0.71,
      },
      {
        level: 10,
        speed: 16,
        cornering: 24,
        powerUnit: 23,
        reliability: 14,
        pitStopTime: 0.69,
      },
      {
        level: 11,
        speed: 17,
        cornering: 25,
        powerUnit: 24,
        reliability: 15,
        pitStopTime: 0.67,
      },
    ],
  },
  {
    id: 4,
    name: 'The Patron',
    rarity: 'rare',
    series: 6,
    stats: [
      {
        level: 1,
        speed: 12,
        cornering: 10,
        powerUnit: 8,
        reliability: 14,
        pitStopTime: 0.84,
      },
      {
        level: 2,
        speed: 13,
        cornering: 11,
        powerUnit: 9,
        reliability: 17,
        pitStopTime: 0.81,
      },
      {
        level: 3,
        speed: 15,
        cornering: 13,
        powerUnit: 11,
        reliability: 20,
        pitStopTime: 0.78,
      },
      {
        level: 4,
        speed: 16,
        cornering: 14,
        powerUnit: 12,
        reliability: 23,
        pitStopTime: 0.75,
      },
      {
        level: 5,
        speed: 18,
        cornering: 16,
        powerUnit: 14,
        reliability: 26,
        pitStopTime: 0.72,
      },
      {
        level: 6,
        speed: 19,
        cornering: 17,
        powerUnit: 15,
        reliability: 28,
        pitStopTime: 0.7,
      },
      {
        level: 7,
        speed: 20,
        cornering: 18,
        powerUnit: 16,
        reliability: 31,
        pitStopTime: 0.67,
      },
      {
        level: 8,
        speed: 22,
        cornering: 20,
        powerUnit: 18,
        reliability: 34,
        pitStopTime: 0.64,
      },
      {
        level: 9,
        speed: 23,
        cornering: 21,
        powerUnit: 19,
        reliability: 37,
        pitStopTime: 0.61,
      },
    ],
  },
  {
    id: 5,
    name: 'Freeflare',
    rarity: 'rare',
    series: 8,
    stats: [
      {
        level: 1,
        speed: 10,
        cornering: 16,
        powerUnit: 9,
        reliability: 11,
        pitStopTime: 0.73,
      },
      {
        level: 2,
        speed: 11,
        cornering: 18,
        powerUnit: 10,
        reliability: 12,
        pitStopTime: 0.69,
      },
      {
        level: 3,
        speed: 13,
        cornering: 20,
        powerUnit: 12,
        reliability: 14,
        pitStopTime: 0.64,
      },
      {
        level: 4,
        speed: 14,
        cornering: 22,
        powerUnit: 13,
        reliability: 15,
        pitStopTime: 0.6,
      },
      {
        level: 5,
        speed: 16,
        cornering: 25,
        powerUnit: 15,
        reliability: 17,
        pitStopTime: 0.55,
      },
      {
        level: 6,
        speed: 17,
        cornering: 27,
        powerUnit: 16,
        reliability: 18,
        pitStopTime: 0.51,
      },
      {
        level: 7,
        speed: 18,
        cornering: 29,
        powerUnit: 17,
        reliability: 19,
        pitStopTime: 0.46,
      },
      {
        level: 8,
        speed: 20,
        cornering: 31,
        powerUnit: 19,
        reliability: 21,
        pitStopTime: 0.41,
      },
      {
        level: 9,
        speed: 21,
        cornering: 33,
        powerUnit: 20,
        reliability: 22,
        pitStopTime: 0.37,
      },
    ],
  },
  {
    id: 6,
    name: 'Transcendence',
    rarity: 'epic',
    series: 9,
    stats: [
      {
        level: 1,
        speed: 12,
        cornering: 10,
        powerUnit: 17,
        reliability: 18,
        pitStopTime: 0.8,
      },
      {
        level: 2,
        speed: 14,
        cornering: 12,
        powerUnit: 20,
        reliability: 21,
        pitStopTime: 0.76,
      },
      {
        level: 3,
        speed: 15,
        cornering: 13,
        powerUnit: 22,
        reliability: 23,
        pitStopTime: 0.72,
      },
      {
        level: 4,
        speed: 17,
        cornering: 15,
        powerUnit: 25,
        reliability: 26,
        pitStopTime: 0.68,
      },
      {
        level: 5,
        speed: 19,
        cornering: 17,
        powerUnit: 28,
        reliability: 29,
        pitStopTime: 0.64,
      },
      {
        level: 6,
        speed: 21,
        cornering: 19,
        powerUnit: 31,
        reliability: 32,
        pitStopTime: 0.61,
      },
      {
        level: 7,
        speed: 22,
        cornering: 20,
        powerUnit: 33,
        reliability: 34,
        pitStopTime: 0.57,
      },
      {
        level: 8,
        speed: 24,
        cornering: 22,
        powerUnit: 36,
        reliability: 37,
        pitStopTime: 0.53,
      },
    ],
  },
  {
    id: 7,
    name: 'Typhoon',
    rarity: 'epic',
    series: 11,
    stats: [
      {
        level: 1,
        speed: 25,
        cornering: 14,
        powerUnit: 12,
        reliability: 11,
        pitStopTime: 0.76,
      },
      {
        level: 2,
        speed: 29,
        cornering: 16,
        powerUnit: 14,
        reliability: 13,
        pitStopTime: 0.72,
      },
      {
        level: 3,
        speed: 32,
        cornering: 18,
        powerUnit: 16,
        reliability: 14,
        pitStopTime: 0.69,
      },
      {
        level: 4,
        speed: 36,
        cornering: 20,
        powerUnit: 18,
        reliability: 16,
        pitStopTime: 0.66,
      },
      {
        level: 5,
        speed: 39,
        cornering: 21,
        powerUnit: 20,
        reliability: 18,
        pitStopTime: 0.63,
      },
      {
        level: 6,
        speed: 43,
        cornering: 23,
        powerUnit: 22,
        reliability: 20,
        pitStopTime: 0.59,
      },
      {
        level: 7,
        speed: 46,
        cornering: 25,
        powerUnit: 24,
        reliability: 21,
        pitStopTime: 0.56,
      },
      {
        level: 8,
        speed: 50,
        cornering: 27,
        powerUnit: 26,
        reliability: 23,
        pitStopTime: 0.53,
      },
    ],
  },
] as Part[];

const createRearWings = () => {
  const rearWingsToSave = preparePartData(REAR_WINGS);

  console.log('Creating rear wings file >>');
  createFile('src/features/parts/constants/rearWings.json', rearWingsToSave);
};

export default createRearWings;
