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
  brakes: {
    // Starter
    0: {
      cards: 0,
      level: 1,
    },
  },
  engines: {
    // Starter
    0: {
      cards: 0,
      level: 1,
    },
  },
  frontWings: {
    // Starter
    0: {
      cards: 0,
      level: 1,
    },
  },
  gearboxes: {
    // Starter
    0: {
      cards: 0,
      level: 1,
    },
  },
  rearWings: {
    // Starter
    0: {
      cards: 0,
      level: 1,
    },
  },
  suspensions: {
    // Starter
    0: {
      cards: 0,
      level: 1,
    },
  },
});
