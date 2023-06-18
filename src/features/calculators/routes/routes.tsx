import { lazyImport } from '@/utils/lazyImport';
import type { RouteObject } from 'react-router-dom';

const { CalculatorPage } = lazyImport(() => import('./pages'), 'CalculatorPage');

const calculatorsRoutes: RouteObject[] = [
  {
    children: [
      {
        element: <CalculatorPage />,
        index: true,
      },
    ],
    path: 'calculator',
  },
];

export default calculatorsRoutes;
