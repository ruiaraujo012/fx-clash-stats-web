import { useSuspensions } from '@/features/parts';
import useBestPart from './useBestPart';

const useBestSuspension = () => {
  const suspensions = useSuspensions();
  const bestSuspensions = useBestPart(suspensions, 'suspensions');

  return bestSuspensions;
};

export default useBestSuspension;
