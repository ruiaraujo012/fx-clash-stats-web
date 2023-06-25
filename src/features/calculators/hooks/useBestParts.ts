import { useBrakes, useEngines, useFrontWings, useGearboxes, useRearWings, useSuspensions } from '@/features/parts';
import useBestPart from './useBestPart';
import useBestPartsStatsSum from './useBestPartsStatsSum';
import type { BestParts } from '../types';

const useBestParts = (): BestParts => {
  const brakes = useBrakes();
  const bestBrake = useBestPart(brakes, 'brakes');

  const engines = useEngines();
  const bestEngine = useBestPart(engines, 'engines');

  const frontWings = useFrontWings();
  const bestFrontWing = useBestPart(frontWings, 'frontWings');

  const gearboxes = useGearboxes();
  const bestGearbox = useBestPart(gearboxes, 'gearboxes');

  const rearWings = useRearWings();
  const bestRearWing = useBestPart(rearWings, 'rearWings');

  const suspensions = useSuspensions();
  const bestSuspension = useBestPart(suspensions, 'suspensions');

  const sum = useBestPartsStatsSum({
    bestBrake,
    bestEngine,
    bestFrontWing,
    bestGearbox,
    bestRearWing,
    bestSuspension,
  });

  return { bestBrake, bestEngine, bestFrontWing, bestGearbox, bestRearWing, bestSuspension, sum };
};

export default useBestParts;
