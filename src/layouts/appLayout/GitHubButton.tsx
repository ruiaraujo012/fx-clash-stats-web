import { Link } from 'react-router-dom';
import gitHubLogo from '@/assets/github-mark.png';
import gitHubWhiteLogo from '@/assets/github-mark-white.png';
import useThemeStore from '@/store/themeStore';

const GitHubButton = () => {
  const theme = useThemeStore((state) => state.theme);

  /**
   * Render
   */
  return (
    <div className='flex flex-row justify-start items-center'>
      <Link
        className='text-gray-500 hover:bg-gray-100 rounded-lg p-2.5 dark:text-gray-100 dark:hover:bg-gray-700'
        target='_blank'
        to='https://github.com/ruiaraujo012/fx-clash-stats-web'
      >
        <img
          alt='GitHub'
          height={25}
          src={theme === 'dark' ? gitHubWhiteLogo : gitHubLogo}
          width={25}
        />
        <span className='sr-only'>GitHub</span>
      </Link>
    </div>
  );
};

export default GitHubButton;
