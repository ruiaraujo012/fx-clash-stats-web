import { Part, PartStat } from '@/features/parts';

export interface BestPart {
  asset: Part;
  score: number;
  stat: PartStat;
}
