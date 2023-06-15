import { BaseStat, Rarity } from '@/types';

export interface Driver {
  id: number;
  name: string;
  rarity: Rarity;
  series: number;
  stats: DriverStat[];
}

export interface DriverStat extends BaseStat {
  overtaking: number;
  defending: number;
  qualifying: number;
  raceStart: number;
  tireManagement: number;
  statsSum: number;
}
