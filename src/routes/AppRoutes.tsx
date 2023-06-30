import * as Sentry from '@sentry/react';
import { RouterProvider, createHashRouter } from 'react-router-dom';

import commonRoutes from '@/routes/commonRoutes';

const sentryCreateHashRouter = Sentry.wrapCreateBrowserRouter(createHashRouter);

const AppRoutes = () => {
  const router = sentryCreateHashRouter([...commonRoutes]);

  return <RouterProvider router={router} />;
};

export default AppRoutes;
