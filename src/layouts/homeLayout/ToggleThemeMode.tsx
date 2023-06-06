import { useEffect, useState } from 'react';
import type { ChangeEvent } from 'react';

type ThemeMode = 'dark' | 'light';
const THEME_MODE_KEY = 'theme-mode';

const ToggleThemeMode = () => {
  const [themeMode, setThemeMode] = useState<ThemeMode>('light');

  useEffect(() => {
    if (
      localStorage[THEME_MODE_KEY] === 'dark' ||
      (!(THEME_MODE_KEY in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      setThemeMode('dark');
      window.document.documentElement.classList.add('dark');
      localStorage.setItem(THEME_MODE_KEY, 'dark');
    } else {
      setThemeMode('light');
      window.document.documentElement.classList.remove('dark');
      localStorage.setItem(THEME_MODE_KEY, 'light');
    }
  }, []);

  /**
   * Methods
   */
  const handleChangeThemeMode = (event: ChangeEvent<HTMLInputElement>) => {
    const {
      target: { checked },
    } = event;

    setThemeMode(checked ? 'dark' : 'light');

    if (checked) {
      window.document.documentElement.classList.add('dark');
      localStorage.setItem(THEME_MODE_KEY, 'dark');
    } else {
      window.document.documentElement.classList.remove('dark');
      localStorage.setItem(THEME_MODE_KEY, 'light');
    }
  };

  /**
   * Render
   */
  return (
    <div className='flex flex-row justify-start items-center px-2 min-w-fit'>
      <label className='relative inline-flex items-center cursor-pointer'>
        <input
          checked={themeMode === 'dark'}
          className='sr-only peer'
          onChange={handleChangeThemeMode}
          type='checkbox'
          value=''
        />
        <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600" />
        <span className='ml-3 text-sm font-medium text-gray-900 dark:text-gray-300'>Dark Mode</span>
      </label>
    </div>
  );
};

export default ToggleThemeMode;
