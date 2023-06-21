import { Driver } from '@/features/drivers';
import { Part } from '@/features/parts';

export type Rarity = 'common' | 'rare' | 'epic' | 'stock';

export interface Upgrade {
  cards: number;
  coins: number;
}

export interface CollectedData {
  cards: number;
  level: number;
}

export interface AssetCollectedData {
  [id: number]: CollectedData;
}

export type Asset = Part | Driver;

export interface Score {
  weighted: number;
  percentageToMax: number;
}

export interface BaseStat {
  level: number;
  score: Score;
  upgrade: Upgrade;
}
