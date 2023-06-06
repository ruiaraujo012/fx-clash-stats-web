import brakes from '../constants/brakes.json';
import type { Part } from '../types';

const useBrakes = (): Part[] => brakes as Part[];

export default useBrakes;
