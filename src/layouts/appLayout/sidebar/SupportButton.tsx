import { I24Support } from 'iconsax-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import IconsaxIcon from '@/lib/IconsaxIcon';

const SupportButton = () => {
  const { t } = useTranslation();

  return (
    <Link
      className='flex flex-row items-center justify-center gap-2 p-2 rounded-lg text-orange-700 bg-orange-50 dark:text-orange-300 dark:bg-orange-950 hover:bg-orange-100 dark:hover:bg-orange-900 w-full'
      target='_blank'
      to='https://github.com/ruiaraujo012/fx-clash-stats-web/issues/new/choose'
    >
      <IconsaxIcon
        Icon={I24Support}
        className='mt-0.5 ml-0.5'
      />
      <span>{t('reportIssue')}</span>
    </Link>
  );
};

export default SupportButton;
