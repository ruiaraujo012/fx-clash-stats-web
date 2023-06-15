import { lazyImport } from '@/utils/lazyImport';
import type { RouteObject } from 'react-router-dom';

const { DriversListPage } = lazyImport(() => import('./pages'), 'DriversListPage');

const driversRoutes: RouteObject[] = [
  {
    children: [
      {
        element: <DriversListPage />,
        index: true,
      },
    ],
    path: 'drivers',
  },
];

export default driversRoutes;
