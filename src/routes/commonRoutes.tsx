import { HomeLayout } from '@/layouts';
import { Navigate, type RouteObject } from 'react-router-dom';
import { partsRoutes } from '@/features/parts';
import ErrorPage from '@/components/ErrorPage';

const commonRoutes: RouteObject[] = [
  {
    children: [
      ...partsRoutes,
      // TODO: Remove
      {
        element: <Navigate to='/brakes' />,
        path: '',
      },
    ],
    element: <HomeLayout />,
    errorElement: <ErrorPage />,
    path: '/',
  },
];

export default commonRoutes;
