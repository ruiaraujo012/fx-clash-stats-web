import { HeartCircle } from 'iconsax-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import IconsaxIcon from '@/lib/IconsaxIcon';

const SupportMeButton = () => {
  const { t } = useTranslation();

  return (
    <Link
      className='flex flex-row items-center justify-center gap-2 p-2 rounded-lg text-pink-500 bg-pink-50 dark:text-pink-300 dark:bg-pink-950 hover:bg-pink-100 dark:hover:bg-pink-900 w-full'
      target='_blank'
      to='https://github.com/sponsors/ruiaraujo012'
    >
      <IconsaxIcon
        Icon={HeartCircle}
        className='mt-0.5 ml-0.5'
      />
      <span>{t('supportMe')}</span>
    </Link>
  );
};

export default SupportMeButton;
