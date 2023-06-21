import { CloseCircle } from 'iconsax-react';
import { Heading5, IconButton } from '@/components/ui';
import { twMerge } from 'tailwind-merge';
import { useTranslation } from 'react-i18next';
import Sidebar from '@/layouts/appLayout/sidebar/Sidebar';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const MobileSidebar = (props: Props) => {
  const { isOpen, onClose } = props;

  const { t } = useTranslation();

  return (
    <div
      className={twMerge(
        'fixed overflow-hidden z-10 bg-gray-900 bg-opacity-25 backdrop-blur-sm inset-0 transform ease-in-out',
        isOpen
          ? 'transition-opacity opacity-100 duration-500 -translate-x-0'
          : 'transition-all delay-500 opacity-0 -translate-x-full',
      )}
    >
      <div
        className={twMerge(
          'w-screen max-w-xs left-0 absolute bg-white dark:bg-gray-800 h-full shadow-xl delay-400 duration-500 ease-in-out transition-all transform',
          isOpen ? '-translate-x-0' : '-translate-x-full',
        )}
      >
        <div className='relative w-screen max-w-xs flex flex-col space-y-6 h-full'>
          <header className='p-4 flex flex-row justify-between items-center'>
            <Heading5 className='mb-0'>{t('menu')}</Heading5>

            <IconButton
              icon={CloseCircle}
              onClick={onClose}
            />
          </header>

          <Sidebar onClickRoute={() => onClose()} />
        </div>
      </div>
      {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions */}
      <div
        className='w-screen h-full cursor-pointer'
        onClick={onClose}
      />
    </div>
  );
};

export default MobileSidebar;
