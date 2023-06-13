import { Outlet } from 'react-router-dom';
import { useEffect } from 'react';
import NavBar from './NavBar';
import useThemeStore from '@/store/themeStore';

export const AppLayout = () => {
  const theme = useThemeStore((state) => state.theme);

  useEffect(() => {
    const isLight = theme === 'light';

    if (isLight) {
      window.document.documentElement.classList.remove('dark');
    } else {
      window.document.documentElement.classList.add('dark');
    }
  }, [theme]);

  /**
   * Render
   */
  return (
    <div className='flex flex-col'>
      <NavBar />

      <div className='p-2 px-4 min-w-full'>
        <Outlet />
      </div>
    </div>
  );
};
