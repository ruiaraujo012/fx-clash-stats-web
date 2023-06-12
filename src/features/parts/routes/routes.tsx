import { lazyImport } from '@/utils/lazyImport';
import type { RouteObject } from 'react-router-dom';

const { BrakesListPage } = lazyImport(() => import('./pages'), 'BrakesListPage');
const { GearboxesListPage } = lazyImport(() => import('./pages'), 'GearboxesListPage');

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
  {
    children: [
      {
        element: <GearboxesListPage />,
        index: true,
      },
    ],
    path: 'gearboxes',
  },
];

export default partsRoutes;
