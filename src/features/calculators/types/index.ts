import { Driver, DriverStat } from '@/features/drivers';
import { Part, PartStat } from '@/features/parts';

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
