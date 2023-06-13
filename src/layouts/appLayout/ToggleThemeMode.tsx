import { Moon, Sun1 } from 'iconsax-react';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import IconsaxIcon from '@/lib/IconsaxIcon';

type ThemeMode = 'dark' | 'light';
const THEME_MODE_KEY = 'theme-mode';

const ToggleThemeMode = () => {
  const { t } = useTranslation();

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
  const handleClickChangeThemeMode = () => {
    setThemeMode((currentMode) => {
      if (currentMode === 'light') {
        window.document.documentElement.classList.add('dark');
        localStorage.setItem(THEME_MODE_KEY, 'dark');

        return 'dark';
      }

      window.document.documentElement.classList.remove('dark');
      localStorage.setItem(THEME_MODE_KEY, 'light');

      return 'light';
    });
  };

  /**
   * Render
   */
  return (
    <div className='flex flex-row justify-start items-center px-2 min-w-fit'>
      <button
        className='text-gray-500 hover:bg-gray-100 rounded-lg p-2.5 dark:text-gray-100 dark:hover:bg-gray-700'
        onClick={handleClickChangeThemeMode}
        type='button'
      >
        {themeMode === 'dark' ? (
          <>
            <IconsaxIcon Icon={Sun1} />
            <span className='sr-only'>{t('darkMode')}</span>
          </>
        ) : (
          <>
            <IconsaxIcon Icon={Moon} />
            <span className='sr-only'>{t('lightMode')}</span>
          </>
        )}
      </button>
    </div>
  );
};

export default ToggleThemeMode;
