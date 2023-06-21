import useBestBrake from './useBestBrake';
import useBestEngine from './useBestEngine';
import useBestFrontWing from './useBestFrontWing';
import useBestGearbox from './useBestGearbox';
import useBestRearWing from './useBestRearWing';
import useBestSuspension from './useBestSuspension';
import type { BaseStat } from '@/types';
import type { PartStat } from '@/features/parts';

const useBestParts = () => {
  const bestBrake = useBestBrake();
  const bestGearbox = useBestGearbox();
  const bestRearWing = useBestRearWing();
  const bestFrontWing = useBestFrontWing();
  const bestSuspension = useBestSuspension();
  const bestEngine = useBestEngine();

  const sum: { [key in keyof Omit<PartStat, keyof BaseStat>]: number } = {
    cornering:
      bestBrake.stat.cornering +
      bestEngine.stat.cornering +
      bestFrontWing.stat.cornering +
      bestGearbox.stat.cornering +
      bestRearWing.stat.cornering +
      bestSuspension.stat.cornering,
    pitStopTime:
      bestBrake.stat.pitStopTime +
      bestEngine.stat.pitStopTime +
      bestFrontWing.stat.pitStopTime +
      bestGearbox.stat.pitStopTime +
      bestRearWing.stat.pitStopTime +
      bestSuspension.stat.pitStopTime,
    powerUnit:
      bestBrake.stat.powerUnit +
      bestEngine.stat.powerUnit +
      bestFrontWing.stat.powerUnit +
      bestGearbox.stat.powerUnit +
      bestRearWing.stat.powerUnit +
      bestSuspension.stat.powerUnit,
    reliability:
      bestBrake.stat.reliability +
      bestEngine.stat.reliability +
      bestFrontWing.stat.reliability +
      bestGearbox.stat.reliability +
      bestRearWing.stat.reliability +
      bestSuspension.stat.reliability,
    speed:
      bestBrake.stat.speed +
      bestEngine.stat.speed +
      bestFrontWing.stat.speed +
      bestGearbox.stat.speed +
      bestRearWing.stat.speed +
      bestSuspension.stat.speed,
  };

  return { bestBrake, bestEngine, bestFrontWing, bestGearbox, bestRearWing, bestSuspension, sum };
};

export default useBestParts;
