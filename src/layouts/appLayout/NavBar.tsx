import { Link } from 'react-router-dom';
import ToggleThemeMode from './ToggleThemeMode';
import logo from '@/assets/logo.png';

const NavBar = () => (
  /**
   * Render
   */
  <div className='flex flex-row justify-between items-center w-full'>
    <div className='flex flex-row justify-start items-center w-full'>
      <Link to='/'>
        <img
          alt='logo'
          className='h-16 w-16 object-cover'
          src={logo}
        />
      </Link>
    </div>

    <ToggleThemeMode />
  </div>
);

export default NavBar;
