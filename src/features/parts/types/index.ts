import { BaseStat, Rarity, Score, Upgrade } from '@/types';

export interface Part {
  id: number;
  name: string;
  rarity: Rarity;
  series: number;
  stats: PartStat[];
}

export interface PartStat extends BaseStat {
  speed: number;
  cornering: number;
  powerUnit: number;
  reliability: number;
  pitStopTime: number;
}
