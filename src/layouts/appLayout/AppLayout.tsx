import { Outlet } from 'react-router-dom';
import { useEffect } from 'react';
import NavBar from './NavBar';
import Sidebar from '@/layouts/appLayout/sidebar/Sidebar';
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

      <div className='flex flex-row min-h-[calc(100vh-theme(spacing.16))]'>
        <div className='max-2xl:hidden w-72 min-h-full'>
          <Sidebar />
        </div>

        <div className='min-2xl:w-[calc(98vw-theme(spacing.72))] w-full p-4 bg-gray-50 dark:bg-gray-950 rounded-ss-3xl max-2xl:rounded-se-2xl'>
          <Outlet />
        </div>
      </div>
    </div>
  );
};
