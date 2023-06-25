import '@/i18n/i18next';

import { AppProviders } from '@/providers/AppProviders';
import AppRoutes from '@/routes/AppRoutes';

const App = () => (
  /**
   * Render
   */
  <AppProviders>
    <AppRoutes />
  </AppProviders>
);

export default App;
