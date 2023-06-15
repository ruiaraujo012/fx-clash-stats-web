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

          return {
            [assetKey]: {
              ...state[assetKey],
              [id]: {
                ...state[assetKey][id],
                cards: currentCollectedCards + 1,
              },
            },
          };
        });
      },
      updateCollectedAssetCards: (assetKey, id, cards) => {
        const [set] = args;

        return set((state) => ({
          [assetKey]: {
            ...state[assetKey],
            [id]: {
              ...state[assetKey][id],
              cards,
            },
          },
        }));
      },
      updateCollectedAssetLevel: (assetKey, id, level) => {
        const [set] = args;

        return set((state) => ({
          [assetKey]: {
            ...state[assetKey],
            [id]: {
              ...state[assetKey][id],
              level,
            },
          },
        }));
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
