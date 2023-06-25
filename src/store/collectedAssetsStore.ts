import {
  type DriversCollectedDataSlice,
  type DriversCollectedKeys,
  createDriversCollectedSlice,
} from '@/features/drivers';
import { create } from 'zustand';
import { createPartsCollectedSlice } from '@/features/parts';
import { mountStoreDevtool } from 'simple-zustand-devtools';
import { persist } from 'zustand/middleware';
import type { PartsCollectedDataSlice, PartsCollectedKeys } from '@/features/parts';

export type CollectedAssetsKeys = PartsCollectedKeys | DriversCollectedKeys;

type AssetsCollectedState = PartsCollectedDataSlice & DriversCollectedDataSlice;

type AssetsCollectedActions = {
  updateCollectedAssetLevel: (assetKey: CollectedAssetsKeys, id: number, level: number) => void;
  updateCollectedAssetCards: (assetKey: CollectedAssetsKeys, id: number, cards: number) => void;
  increaseCollectedAssetCards: (assetKey: CollectedAssetsKeys, id: number) => void;
  decreaseCollectedAssetCards: (assetKey: CollectedAssetsKeys, id: number) => void;
};

export type AssetsCollectedStore = AssetsCollectedState & AssetsCollectedActions;

const useCollectedAssetsStore = create<AssetsCollectedStore>()(
  persist(
    (...args) => ({
      ...createPartsCollectedSlice(...args),
      ...createDriversCollectedSlice(...args),
      decreaseCollectedAssetCards: (assetKey, id) => {
        const [set] = args;

        return set((state) => {
          const currentCollectedCards = state[assetKey][id]?.cards ?? 0;

          return {
            [assetKey]: {
              ...state[assetKey],
              [id]: {
                ...state[assetKey][id],
                cards: currentCollectedCards > 0 ? currentCollectedCards - 1 : currentCollectedCards,
              },
            },
          };
        });
      },
      increaseCollectedAssetCards: (assetKey, id) => {
        const [set] = args;

        return set((state) => {
          const currentCollectedCards = state[assetKey][id]?.cards ?? 0;
          const currentLevel = state[assetKey][id]?.level ?? 0;

          return {
            [assetKey]: {
              ...state[assetKey],
              [id]: {
                ...state[assetKey][id],
                cards: currentCollectedCards + 1,
                level: currentLevel === 0 ? 1 : currentLevel,
              },
            },
          };
        });
      },
      updateCollectedAssetCards: (assetKey, id, cards) => {
        const [set] = args;

        return set((state) => {
          const currentLevel = state[assetKey][id]?.level ?? 0;

          return {
            [assetKey]: {
              ...state[assetKey],
              [id]: {
                ...state[assetKey][id],
                cards,
                level: currentLevel === 0 && cards > 0 ? 1 : currentLevel,
              },
            },
          };
        });
      },
      updateCollectedAssetLevel: (assetKey, id, level) => {
        const [set] = args;

        return set((state) => {
          const currentCards = state[assetKey][id]?.cards ?? 0;
          let dataToSave;

          if (level === 0) {
            dataToSave = undefined;
          } else {
            dataToSave = {
              ...state[assetKey][id],
              cards: level === 0 ? 0 : currentCards,
              level,
            };
          }

          return {
            [assetKey]: {
              ...state[assetKey],
              [id]: dataToSave,
            },
          };
        });
      },
    }),
    {
      name: 'fxcs-assets-collected-store-storage',
    },
  ),
);

if (import.meta.env.DEV) {
  mountStoreDevtool('[FXCS] Assets Collected Store', useCollectedAssetsStore);
}

export default useCollectedAssetsStore;
