import enUSCommon from './locales/enUS/common.json';
import enUSParts from './locales/enUS/parts.json';

import ptPTCommon from './locales/ptPT/common.json';
import ptPTParts from './locales/ptPT/parts.json';

export const LANGUAGES = {
  EN_US: 'en-US',
  PT_PT: 'pt-PT',
} as const;

export const NAMESPACES = {
  COMMON: 'common',
  PARTS: 'parts',
} as const;

export const PT_PT_RESOURCES = {
  [NAMESPACES.PARTS]: ptPTParts,
  [NAMESPACES.COMMON]: ptPTCommon,
} as const;

export const EN_US_RESOURCES = {
  [NAMESPACES.PARTS]: enUSParts,
  [NAMESPACES.COMMON]: enUSCommon,
} as const;

export const languages = [LANGUAGES.EN_US, LANGUAGES.PT_PT] as const;
export const namespaces = Object.values(NAMESPACES);
export const defaultNS = NAMESPACES.COMMON;
export const resources = {
  [LANGUAGES.EN_US]: EN_US_RESOURCES,
  [LANGUAGES.PT_PT]: PT_PT_RESOURCES,
} as const;

/**
 * Types
 */
export type TLanguagesKeys = keyof typeof LANGUAGES;
export type TLanguagesValues = (typeof LANGUAGES)[TLanguagesKeys];

/**
 * Functions
 */

/**
 * normalizeKey
 * @param key the key to be normalized and work in `t`
 * @returns the normalized key
 */
export const normalizeKey = (key: string) => key as unknown as TemplateStringsArray;
