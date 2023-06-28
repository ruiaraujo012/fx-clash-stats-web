import i18next from 'i18next';

/**
 * formatLongNumbers
 * @param value value to be parsed into long number format
 * @returns the parsed long value
 */
export const formatLongNumber = (value: number): string => {
  if (value === null || value === undefined) {
    return '';
  }

  const currentLanguage = i18next.language;
  const formatter = new Intl.NumberFormat(currentLanguage);

  return formatter.format(value);
};
