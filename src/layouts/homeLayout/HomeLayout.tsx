import { Outlet } from 'react-router-dom';
import NavBar from './NavBar';

export const HomeLayout = () => (
  /**
   * Render
   */
  <div className='flex flex-col'>
    <NavBar />

    <div className='p-2 px-4 min-w-full'>
      <Outlet />
    </div>
  </div>
);
