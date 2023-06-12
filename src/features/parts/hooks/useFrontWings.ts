import frontWings from '../constants/frontWings.json';
import type { Part } from '../types';

const useFrontWings = (): Part[] => frontWings as Part[];

export default useFrontWings;
