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
    <>
      <NavBar />

      <div className='flex min-h-screen'>
        <div className='max-2xl:hidden'>
          <Sidebar />
        </div>

        <div className='mt-16 p-3 flex-1 bg-gray-50 dark:bg-gray-950 rounded-ss-3xl max-xl:rounded-se-2xl'>
          <Outlet />
        </div>
      </div>
    </>
  );
};
