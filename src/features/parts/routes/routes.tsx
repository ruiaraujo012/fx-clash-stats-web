import { lazyImport } from '@/utils/lazyImport';
import type { RouteObject } from 'react-router-dom';

const { BrakesListPage } = lazyImport(() => import('./pages'), 'BrakesListPage');

const partsRoutes: RouteObject[] = [
  {
    children: [
      {
        element: <BrakesListPage />,
        index: true,
      },
    ],
    path: 'brakes',
  },
];

export default partsRoutes;
