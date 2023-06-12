import rearWings from '../constants/rearWings.json';
import type { Part } from '../types';

const useRearWings = (): Part[] => rearWings as Part[];

export default useRearWings;
