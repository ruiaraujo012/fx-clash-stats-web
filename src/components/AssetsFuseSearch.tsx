import { SearchNormal1 } from 'iconsax-react';
import { useTranslation } from 'react-i18next';
import IconsaxIcon from '@/lib/IconsaxIcon';

interface Props {
  onChangeSearch: (search: string) => void;
}

const AssetsFuseSearch = (props: Props) => {
  const { onChangeSearch } = props;

  const { t } = useTranslation(['common']);

  return (
    <div className='w-full max-w-sm'>
      <label
        className='mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white'
        htmlFor='search'
      >
        {t('search')}
      </label>
      <div className='relative'>
        <div className='absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none'>
          <IconsaxIcon
            Icon={SearchNormal1}
            className='text-black dark:text-white'
          />
        </div>
        <input
          className='block w-full p-3 pl-11 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white'
          id='search'
          onChange={(e) => onChangeSearch(e.target.value)}
          placeholder={t('search')}
          type='search'
        />
      </div>
    </div>
  );
};

export default AssetsFuseSearch;
