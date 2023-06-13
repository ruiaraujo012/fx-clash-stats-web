import { Link } from 'react-router-dom';
import GitHubButton from './GitHubButton';
import ThemeModeButton from './ThemeModeButton';
import logo from '@/assets/logo.png';

const NavBar = () => (
  /**
   * Render
   */
  <div className='flex flex-row justify-between items-center w-full'>
    <div>
      <Link to='/'>
        <img
          alt='logo'
          className='h-16 w-16 object-cover'
          src={logo}
        />
      </Link>
    </div>

    <div className='flex flex-row gap-2 mx-2'>
      <GitHubButton />
      <ThemeModeButton />
    </div>
  </div>
);

export default NavBar;
