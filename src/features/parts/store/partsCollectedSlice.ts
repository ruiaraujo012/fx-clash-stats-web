import type { AssetCollectedData } from '@/types';
import type { AssetsCollectedStore } from '@/store/collectedAssetsStore';
import type { StateCreator } from 'zustand';

interface State {
  brakes: AssetCollectedData;
  engines: AssetCollectedData;
  frontWings: AssetCollectedData;
  gearboxes: AssetCollectedData;
  rearWings: AssetCollectedData;
  suspensions: AssetCollectedData;
}

export type PartsKeys = keyof State;

// interface Actions {
//   updateCollectedPart: (id: number, part: PartsKeys, data: Partial<CollectedData>) => void;
// }

// export type PartsDataSlice = State & Actions;
export type PartsDataSlice = State;

export const createPartsCollectedSlice: StateCreator<AssetsCollectedStore, [], [], PartsDataSlice> = () => ({
  brakes: {},
  engines: {},
  frontWings: {},
  gearboxes: {},
  rearWings: {},
  suspensions: {},
});
