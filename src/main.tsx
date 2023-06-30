import './index.css';

import * as Sentry from '@sentry/react';
import { createRoutesFromChildren, matchRoutes, useLocation, useNavigationType } from 'react-router-dom';
import React from 'react';
import ReactDOM from 'react-dom/client';

import App from '@/App';

Sentry.init({
  dsn: 'https://d94f663f1caf43b08cdca8368119229c@o4505449919479808.ingest.sentry.io/4505449924132864',
  enabled: !import.meta.env.DEV,
  integrations: [
    new Sentry.BrowserTracing({
      // See docs for support of different versions of variation of react router
      // https://docs.sentry.io/platforms/javascript/guides/react/configuration/integrations/react-router/
      routingInstrumentation: Sentry.reactRouterV6Instrumentation(
        React.useEffect,
        useLocation,
        useNavigationType,
        createRoutesFromChildren,
        matchRoutes,
      ),
      // Set `tracePropagationTargets` to control for which URLs distributed tracing should be enabled
      tracePropagationTargets: [/^https:\/\/ruiaraujo012\.github\.io\/fx-clash-stats-web/],
    }),
    new Sentry.Replay(),
  ],
  release: APP_VERSION,
  // Session Replay
  replaysOnErrorSampleRate: 1.0,
  replaysSessionSampleRate: 0.1,
  // Performance Monitoring
  tracesSampleRate: 0.1,
});

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
