import { create } from 'zustand';
import { mountStoreDevtool } from 'simple-zustand-devtools';
import { persist } from 'zustand/middleware';

type ThemeMode = 'dark' | 'light';

interface ThemeState {
  theme: ThemeMode;
}

interface ThemeActions {
  toggleTheme: () => void;
}

export type ThemeStore = ThemeState & ThemeActions;

const useThemeStore = create<ThemeStore>()(
  persist(
    (set) => ({
      theme: 'light',
      toggleTheme: () => set((state) => ({ theme: state.theme === 'light' ? 'dark' : 'light' })),
    }),
    {
      name: 'fxcs-theme-store-storage',
    },
  ),
);

if (import.meta.env.DEV) {
  mountStoreDevtool('[FXCS] Theme Store', useThemeStore);
}

export default useThemeStore;
