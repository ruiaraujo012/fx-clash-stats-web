import { Cd } from 'iconsax-react';
import { NavLink } from 'react-router-dom';
import { twMerge } from 'tailwind-merge';
import IconsaxIcon from '@/lib/IconsaxIcon';
import type { SidebarRoute } from './Sidebar';

interface Props {
  item: SidebarRoute;
  onClickRoute?: (route: SidebarRoute) => void;
}

const SideBarItem = (props: Props) => {
  const { item, onClickRoute } = props;

  return (
    <li>
      <NavLink
        className={({ isActive }) =>
          twMerge(
            'flex flex-row items-center gap-1 p-2 pl-3 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700',
            isActive ? 'text-blue-700 bg-blue-100 dark:bg-blue-700 hover:bg-blue-100 dark:hover:bg-blue-700' : '',
          )
        }
        onClick={() => (onClickRoute ? onClickRoute(item) : null)}
        to={item.path}
      >
        <IconsaxIcon
          Icon={Cd}
          className='mt-0.5 ml-0.5'
          size={15}
        />
        <span>{item.name}</span>
      </NavLink>
    </li>
  );
};

export default SideBarItem;
