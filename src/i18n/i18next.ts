import i18next from 'i18next';

import { LANGUAGES, defaultNS, languages, namespaces, resources } from './helpers';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const { VITE_I18NEXT_DEBUG } = import.meta.env;

/**
 * Config
 */
i18next
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: VITE_I18NEXT_DEBUG === 'true',
    defaultNS,
    detection: {
      order: ['localStorage', 'sessionStorage', 'querystring', 'cookie', 'navigator', 'htmlTag', 'path', 'subdomain'],
    },
    fallbackLng: LANGUAGES.EN_US,
    fallbackNS: defaultNS,
    ns: namespaces,
    resources,
  });

i18next.languages = languages;

export default i18next;
