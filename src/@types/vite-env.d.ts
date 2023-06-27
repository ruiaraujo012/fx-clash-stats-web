/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_I18NEXT_DEBUG: 'true' | 'false';
  readonly VITE_BASE_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

declare const APP_ENVIRONMENT: string;
declare const APP_VERSION: string;
declare const APP_VERSION_DATE: string;
