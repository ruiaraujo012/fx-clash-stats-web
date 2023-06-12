import { lazyImport } from '@/utils/lazyImport';
import type { RouteObject } from 'react-router-dom';

const { BrakesListPage } = lazyImport(() => import('./pages'), 'BrakesListPage');
const { GearboxesListPage } = lazyImport(() => import('./pages'), 'GearboxesListPage');
const { RearWingsListPage } = lazyImport(() => import('./pages'), 'RearWingsListPage');
const { FrontWingsListPage } = lazyImport(() => import('./pages'), 'FrontWingsListPage');
const { SuspensionsListPage } = lazyImport(() => import('./pages'), 'SuspensionsListPage');
const { EnginesListPage } = lazyImport(() => import('./pages'), 'EnginesListPage');

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
  {
    children: [
      {
        element: <RearWingsListPage />,
        index: true,
      },
    ],
    path: 'rear-wings',
  },
  {
    children: [
      {
        element: <FrontWingsListPage />,
        index: true,
      },
    ],
    path: 'front-wings',
  },
  {
    children: [
      {
        element: <SuspensionsListPage />,
        index: true,
      },
    ],
    path: 'suspensions',
  },
  {
    children: [
      {
        element: <EnginesListPage />,
        index: true,
      },
    ],
    path: 'engines',
  },
];

export default partsRoutes;
