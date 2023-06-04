import { AssetDetails } from '@/types';

export interface PartLevelStats {
  speed: number;
  cornering: number;
  powerUnit: number;
  reliability: number;
  pitStopTime: number;
}

interface StockPartStats {
  0: PartLevelStats;
}

export type Test = CommonPartStats | RarePartStats | EpicPartStats | StockPartStats;

export interface CommonPartStats {
  0: PartLevelStats;
  1: PartLevelStats;
  2: PartLevelStats;
  3: PartLevelStats;
  4: PartLevelStats;
  5: PartLevelStats;
  6: PartLevelStats;
  7: PartLevelStats;
  8: PartLevelStats;
  9: PartLevelStats;
  10: PartLevelStats;
  11: PartLevelStats;
}

interface RarePartStats {
  0: PartLevelStats;
  1: PartLevelStats;
  2: PartLevelStats;
  3: PartLevelStats;
  4: PartLevelStats;
  5: PartLevelStats;
  6: PartLevelStats;
  7: PartLevelStats;
  8: PartLevelStats;
  9: PartLevelStats;
}

interface EpicPartStats {
  0: PartLevelStats;
  1: PartLevelStats;
  2: PartLevelStats;
  3: PartLevelStats;
  4: PartLevelStats;
  5: PartLevelStats;
  6: PartLevelStats;
  7: PartLevelStats;
  8: PartLevelStats;
}

export type Part = AssetDetails &
  (
    | {
        rarity: 'stock';
        stats: StockPartStats;
      }
    | {
        rarity: 'common';
        stats: CommonPartStats;
      }
    | {
        rarity: 'rare';
        stats: RarePartStats;
      }
    | {
        rarity: 'epic';
        stats: EpicPartStats;
      }
  );

export interface PartsReturnType<T> {
  data: T;
  averages: PartLevelStats;
}
