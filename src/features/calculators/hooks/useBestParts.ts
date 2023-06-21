import useBestBrake from './useBestBrake';
import useBestEngine from './useBestEngine';
import useBestFrontWing from './useBestFrontWing';
import useBestGearbox from './useBestGearbox';
import useBestRearWing from './useBestRearWing';
import useBestSuspension from './useBestSuspension';

const useBestParts = () => {
  const bestBrake = useBestBrake();
  const bestGearbox = useBestGearbox();
  const bestRearWing = useBestRearWing();
  const bestFrontWing = useBestFrontWing();
  const bestSuspension = useBestSuspension();
  const bestEngine = useBestEngine();

  return { bestBrake, bestEngine, bestFrontWing, bestGearbox, bestRearWing, bestSuspension };
};

export default useBestParts;
