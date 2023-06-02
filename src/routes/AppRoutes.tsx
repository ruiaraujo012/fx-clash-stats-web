import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import commonRoutes from '@/routes/commonRoutes';

const AppRoutes = () => {
  const router = createBrowserRouter([...commonRoutes]);

  return <RouterProvider router={router} />;
};

export default AppRoutes;
