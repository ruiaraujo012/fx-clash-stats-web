import drivers from '../constants/drivers.json';
import type { Driver } from '../types';

const useDrivers = (): Driver[] => drivers as Driver[];

export default useDrivers;
