import suspensions from '../constants/suspensions.json';
import type { Part } from '../types';

const useSuspensions = (): Part[] => suspensions as Part[];

export default useSuspensions;
