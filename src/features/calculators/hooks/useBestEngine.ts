import { useEngines } from '@/features/parts';
import useBestPart from './useBestPart';

const useBestEngine = () => {
  const engines = useEngines();
  const bestEngine = useBestPart(engines, 'engines');

  return bestEngine;
};

export default useBestEngine;
