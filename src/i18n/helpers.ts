import enUSCalculators from './locales/en-US/calculators.json';
import enUSCommon from './locales/en-US/common.json';
import enUSDrivers from './locales/en-US/drivers.json';
import enUSParts from './locales/en-US/parts.json';

import ptPTCalculators from './locales/pt-PT/calculators.json';
import ptPTCommon from './locales/pt-PT/common.json';
import ptPTDrivers from './locales/pt-PT/drivers.json';
import ptPTParts from './locales/pt-PT/parts.json';

export const LANGUAGES = {
  EN_US: 'en-US',
  PT_PT: 'pt-PT',
} as const;

export const NAMESPACES = {
  CALCULATORS: 'calculators',
  COMMON: 'common',
  DRIVERS: 'drivers',
  PARTS: 'parts',
} as const;

export const PT_PT_RESOURCES = {
  [NAMESPACES.CALCULATORS]: ptPTCalculators,
  [NAMESPACES.COMMON]: ptPTCommon,
  [NAMESPACES.DRIVERS]: ptPTDrivers,
  [NAMESPACES.PARTS]: ptPTParts,
} as const;

export const EN_US_RESOURCES = {
  [NAMESPACES.CALCULATORS]: enUSCalculators,
  [NAMESPACES.COMMON]: enUSCommon,
  [NAMESPACES.DRIVERS]: enUSDrivers,
  [NAMESPACES.PARTS]: enUSParts,
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
