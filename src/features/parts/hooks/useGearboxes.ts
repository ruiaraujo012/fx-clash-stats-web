import gearboxes from '../constants/gearboxes.json';
import type { Part } from '../types';

const useGearboxes = (): Part[] => gearboxes as Part[];

export default useGearboxes;
