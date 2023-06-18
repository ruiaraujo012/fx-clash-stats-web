import { useFrontWings } from '@/features/parts';
import useBestPart from './useBestPart';

const useBestFrontWing = () => {
  const frontWings = useFrontWings();
  const bestFrontWing = useBestPart(frontWings, 'frontWings');

  return bestFrontWing;
};

export default useBestFrontWing;
