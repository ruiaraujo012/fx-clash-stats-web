import { normalizeKey } from '@/i18n/helpers';
import { twMerge } from 'tailwind-merge';
import { useTranslation } from 'react-i18next';
import type { Rarity } from '@/types';

const badgeColor: { [key in Rarity]: string } = {
  common: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300',
  epic: 'bg-fuchsia-100 text-fuchsia-800 dark:bg-fuchsia-900 dark:text-fuchsia-300',
  rare: 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-300',
  stock: 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300',
};

interface Props {
  rarity: Rarity;
}

const RarityBadge = (props: Props) => {
  const { rarity } = props;

  const { t } = useTranslation();

  return (
    <span className={twMerge('text-xs font-medium mr-2 px-2.5 py-0.5 rounded', badgeColor[rarity])}>
      {t(normalizeKey(rarity))}
    </span>
  );
};

export default RarityBadge;
