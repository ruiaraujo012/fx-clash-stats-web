import { lazyImport } from '@/utils/lazyImport';
import type { RouteObject } from 'react-router-dom';

const { PartsListPage } = lazyImport(() => import('./pages'), 'PartsListPage');

const partsRoutes: RouteObject[] = [
  {
    children: [
      {
        element: <PartsListPage />,
        index: true,
      },
    ],
    path: 'parts',
  },
];

export default partsRoutes;
