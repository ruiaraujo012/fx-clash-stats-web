import type { AssetCollectedData } from '@/types';
import type { AssetsCollectedStore } from '@/store/collectedAssetsStore';
import type { StateCreator } from 'zustand';

interface PartsCollectedState {
  brakes: AssetCollectedData;
  engines: AssetCollectedData;
  frontWings: AssetCollectedData;
  gearboxes: AssetCollectedData;
  rearWings: AssetCollectedData;
  suspensions: AssetCollectedData;
}

export type PartsCollectedKeys = keyof PartsCollectedState;

export type PartsCollectedDataSlice = PartsCollectedState;

export const createPartsCollectedSlice: StateCreator<
  AssetsCollectedStore,
  [['zustand/persist', unknown]],
  [],
  PartsCollectedDataSlice
> = () => ({
  brakes: {},
  engines: {},
  frontWings: {},
  gearboxes: {},
  rearWings: {},
  suspensions: {},
});
