import { Driver, DriverStat } from '@/features/drivers';
import { Part, PartStat } from '@/features/parts';
import { BaseStat } from '@/types';
import { AssetUpgradeRequirements } from '@/utils/assetUpgradeRequirements';

export interface BestPart {
  asset: Part;
  score: number;
  stat: PartStat;
}

export interface BestDriver {
  asset: Driver;
  score: number;
  stat: DriverStat;
}

export type BestDrivers =
  | { hasTwoDrivers: true; driver1: BestDriver; driver2: BestDriver }
  | { hasTwoDrivers: false; driver1: undefined; driver2: undefined };

export type BestPartsSum = {
  [key in keyof Omit<PartStat, keyof BaseStat>]: number;
};

export interface BestParts {
  bestBrake: BestPart;
  bestEngine: BestPart;
  bestFrontWing: BestPart;
  bestGearbox: BestPart;
  bestRearWing: BestPart;
  bestSuspension: BestPart;
  sum: BestPartsSum;
}

export interface BestPartOnceUpgradedRequirements {
  upgradeRequirements?: Pick<AssetUpgradeRequirements, 'coinsNeeded'>;
}
