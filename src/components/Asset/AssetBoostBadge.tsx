import { useTranslation } from 'react-i18next';

interface Props {
  boost: number;
}

const AssetBoostBadge = (props: Props) => {
  const { boost } = props;

  const { t } = useTranslation();

  return (
    <span className='text-xs font-medium px-2.5 py-0.5 rounded text-amber-950 bg-amber-500 dark:bg-amber-500'>
      {t('boostPercentage', { boost })}
    </span>
  );
};

export default AssetBoostBadge;
