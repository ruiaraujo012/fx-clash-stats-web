import { Rarity } from '@/types';

export interface Part {
  id: number;
  name: string;
  rarity: Rarity;
  series: number;
  stats: Stat[];
}

export interface Stat {
  level: number;
  speed: number;
  cornering: number;
  powerUnit: number;
  reliability: number;
  pitStopTime: number;
  score: Score;
  upgrade: Upgrade;
}

export interface Score {
  weighted: number;
  percentageToMax: number;
}

export interface Upgrade {
  cards: number;
  coins: number;
}
