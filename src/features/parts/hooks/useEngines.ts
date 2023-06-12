import engines from '../constants/engines.json';
import type { Part } from '../types';

const useEngines = (): Part[] => engines as Part[];

export default useEngines;
