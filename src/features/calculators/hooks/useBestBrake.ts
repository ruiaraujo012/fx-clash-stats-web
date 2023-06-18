import { useBrakes } from '@/features/parts';
import useBestPart from './useBestPart';

const useBestBrake = () => {
  const brakes = useBrakes();
  const bestBrake = useBestPart(brakes, 'brakes');

  return bestBrake;
};

export default useBestBrake;
