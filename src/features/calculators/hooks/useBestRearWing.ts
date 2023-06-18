import { useRearWings } from '@/features/parts';
import useBestPart from './useBestPart';

const useBestRearWing = () => {
  const rearWings = useRearWings();
  const bestRearWing = useBestPart(rearWings, 'rearWings');

  return bestRearWing;
};

export default useBestRearWing;
