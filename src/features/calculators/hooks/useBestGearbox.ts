import { useGearboxes } from '@/features/parts';
import useBestPart from './useBestPart';

const useBestGearbox = () => {
  const gearboxes = useGearboxes();
  const bestGearbox = useBestPart(gearboxes, 'gearboxes');

  return bestGearbox;
};

export default useBestGearbox;
