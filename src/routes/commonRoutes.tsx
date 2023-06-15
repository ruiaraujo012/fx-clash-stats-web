import { AppLayout } from '@/layouts';
import { Navigate, type RouteObject } from 'react-router-dom';
import { driversRoutes } from '@/features/drivers';
import { partsRoutes } from '@/features/parts';
import ErrorPage from '@/components/ErrorPage';

const commonRoutes: RouteObject[] = [
  {
    children: [
      ...driversRoutes,
      ...partsRoutes,
      // TODO: Remove
      {
        element: <Navigate to='/brakes' />,
        path: '',
      },
    ],
    element: <AppLayout />,
    errorElement: <ErrorPage />,
    path: '/',
  },
];

export default commonRoutes;
