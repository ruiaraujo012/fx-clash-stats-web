import { RouterProvider, createHashRouter } from 'react-router-dom';

import commonRoutes from '@/routes/commonRoutes';

const AppRoutes = () => {
  const router = createHashRouter([...commonRoutes]);

  return <RouterProvider router={router} />;
};

export default AppRoutes;
