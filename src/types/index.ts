import { Part } from '@/features/parts/types';

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

// TODO: Remove
export type Driver = Part;
export type Asset = Part | Driver;
