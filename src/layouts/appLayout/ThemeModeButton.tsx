import { IconButton } from '@/components/ui';
import { Moon, Sun1 } from 'iconsax-react';
import useThemeStore from '@/store/themeStore';

const ThemeModeButton = () => {
  const { theme, toggleTheme } = useThemeStore();

  /**
   * Render
   */
  return (
    <IconButton
      icon={theme === 'dark' ? Sun1 : Moon}
      onClick={toggleTheme}
    />
  );
};

export default ThemeModeButton;
