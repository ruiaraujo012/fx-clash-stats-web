import { AppLayout } from '@/layouts';
import { Navigate, type RouteObject } from 'react-router-dom';
import { calculatorsRoutes } from '@/features/calculators';
import { driversRoutes } from '@/features/drivers';
import { partsRoutes } from '@/features/parts';
import ErrorPage from '@/components/ErrorPage';

const commonRoutes: RouteObject[] = [
  {
    children: [
      ...driversRoutes,
      ...partsRoutes,
      ...calculatorsRoutes,
      {
        element: <Navigate to='/calculator' />,
        path: '',
      },
    ],
    element: <AppLayout />,
    errorElement: <ErrorPage />,
    path: '/',
  },
];

export default commonRoutes;
