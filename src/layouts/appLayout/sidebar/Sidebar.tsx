import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import AppVersion from './AppVersion';
import SideBarItem from './SidebarItem';
import SupportButton from './SupportButton';
import SupportMeButton from './SupportMeButton';

export interface SidebarRoute {
  name: string;
  path: string;
}

interface Props {
  onClickRoute?: (route: SidebarRoute) => void;
}

const Sidebar = (props: Props) => {
  const { onClickRoute } = props;

  const { t } = useTranslation(['common', 'parts', 'drivers']);

  const sidebarRoutes: SidebarRoute[] = useMemo(
    () => [
      {
        name: t('calculator'),
        path: '/calculator',
      },
      {
        name: t('drivers:driver', { count: 2 }),
        path: '/drivers',
      },
      {
        name: t('parts:brake', { count: 2 }),
        path: '/brakes',
      },
      {
        name: t('parts:gearbox', { count: 2 }),
        path: '/gearboxes',
      },
      {
        name: t('parts:rearWing', { count: 2 }),
        path: '/rear-wings',
      },
      {
        name: t('parts:frontWing', { count: 2 }),
        path: '/front-wings',
      },
      {
        name: t('parts:suspension', { count: 2 }),
        path: '/suspensions',
      },
      {
        name: t('parts:engine', { count: 2 }),
        path: '/engines',
      },
    ],
    [t],
  );

  return (
    <aside className='sticky top-16 h-[calc(100vh-theme(spacing.16))] max-xl:w-80 w-60 overflow-y-auto pt-1 z-10'>
      <div className='h-full w-full px-2 flex flex-col justify-between'>
        <ul className='space-y-1 font-medium'>
          {sidebarRoutes.map((route) => (
            <SideBarItem
              item={route}
              key={route.path}
              onClickRoute={onClickRoute}
            />
          ))}
        </ul>

        <div className='flex flex-col items-center gap-2 pb-2 w-full'>
          <SupportButton />
          <SupportMeButton />
          <AppVersion />
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
