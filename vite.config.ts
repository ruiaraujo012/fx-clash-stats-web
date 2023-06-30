import { VitePWA } from 'vite-plugin-pwa';
import { checker } from 'vite-plugin-checker';
import { defineConfig, loadEnv } from 'vite';
import { sentryVitePlugin } from '@sentry/vite-plugin';
import eslint from 'vite-plugin-eslint';
import path from 'path';
import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };

  const { VITE_BASE_URL } = process.env;

  return {
    base: VITE_BASE_URL,
    build: {
      chunkSizeWarningLimit: 2_500,
      minify: 'esbuild',
      outDir: 'build',
      rollupOptions: {
        output: {
          manualChunks: (id) => {
            if (id.includes('node_modules')) {
              return 'vendor';
            }
          },
        },
      },
      sourcemap: true,
    },
    define: {
      APP_ENVIRONMENT: JSON.stringify(mode),
      APP_VERSION: JSON.stringify(process.env.npm_package_version),
      APP_VERSION_DATE: Date.now().toString(),
    },
    esbuild: {
      drop: mode !== 'development' ? ['console', 'debugger'] : [],
    },
    plugins: [
      react(),
      checker({
        overlay: false,
        terminal: true,
        typescript: true,
      }),
      {
        // default settings on build (i.e. fail on error)
        ...eslint(),
        apply: 'build',
      },
      {
        // do not fail on serve (i.e. local development)
        ...eslint({
          failOnError: false,
          failOnWarning: false,
          fix: true,
          fixTypes: ['layout', 'suggestion'],
        }),
        apply: 'serve',
        enforce: 'post',
      },
      VitePWA({
        manifest: {
          display: 'fullscreen',
          orientation: 'portrait-primary',
          prefer_related_applications: true,
        },
        registerType: 'autoUpdate',
      }),
      // Put the Sentry vite plugin after all other plugins
      sentryVitePlugin({
        // Auth tokens can be obtained from https://sentry.io/settings/account/api/auth-tokens/
        // and need `project:releases` and `org:read` scopes
        authToken: process.env.SENTRY_AUTH_TOKEN,
        org: 'personal-zc9',
        project: 'fx-clash-stats-web',
      }),
    ],
    resolve: {
      alias: [
        { find: '@', replacement: path.resolve(__dirname, 'src') },
        { find: '@/features', replacement: path.resolve(__dirname, 'src/features') },
      ],
    },
    server: {
      open: mode === 'development',
    },
  };
});
