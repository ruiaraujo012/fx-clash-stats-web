import type { AssetCollectedData } from '@/types';
import type { AssetsCollectedStore } from '@/store/collectedAssetsStore';
import type { StateCreator } from 'zustand';

interface DriversCollectedState {
  drivers: AssetCollectedData;
}

export type DriversCollectedKeys = keyof DriversCollectedState;

export type DriversCollectedDataSlice = DriversCollectedState;

export const createDriversCollectedSlice: StateCreator<
  AssetsCollectedStore,
  [['zustand/persist', unknown]],
  [],
  DriversCollectedDataSlice
> = () => ({
  drivers: {},
});
