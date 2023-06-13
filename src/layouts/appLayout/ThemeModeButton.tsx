import { Moon, Sun1 } from 'iconsax-react';
import { useTranslation } from 'react-i18next';
import IconsaxIcon from '@/lib/IconsaxIcon';
import useThemeStore from '@/store/themeStore';

const ThemeModeButton = () => {
  const { t } = useTranslation();
  const { theme, toggleTheme } = useThemeStore();

  /**
   * Render
   */
  return (
    <div className='flex flex-row justify-start items-center'>
      <button
        className='text-gray-500 hover:bg-gray-100 rounded-lg p-2.5 dark:text-gray-100 dark:hover:bg-gray-700'
        onClick={toggleTheme}
        type='button'
      >
        {theme === 'dark' ? (
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

export default ThemeModeButton;
