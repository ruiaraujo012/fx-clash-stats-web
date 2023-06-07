import '@/i18n/i18next';

import { AppProviders } from '@/providers/AppProviders';
import AppRoutes from '@/routes/AppRoutes';

const App = () => (
  /**
   * Render
   */
  <div className='bg-white dark:bg-gray-800 min-h-screen'>
    <AppProviders>
      <AppRoutes />
    </AppProviders>
  </div>
);

export default App;
