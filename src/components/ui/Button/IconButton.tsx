import { twMerge } from 'tailwind-merge';
import IconsaxIcon from '@/lib/IconsaxIcon';
import type { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';
import type { Icon } from 'iconsax-react';
import type { IconsaxProps } from '@/lib/IconsaxIcon';

interface Props {
  buttonProps?: Omit<DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, 'onClick'>;
  iconProps?: Omit<IconsaxProps, 'Icon'>;
  onClick?: () => void;
  icon: Icon;
}

const IconButton = (props: Props) => {
  const { buttonProps, icon, iconProps, onClick } = props;

  const { className, ...other } = buttonProps ?? {};

  return (
    <button
      className={twMerge(
        'text-gray-500 hover:bg-gray-100 rounded-lg p-2.5 dark:text-gray-100 dark:hover:bg-gray-700',
        className,
      )}
      onClick={onClick}
      type='button'
      {...other}
    >
      <IconsaxIcon
        Icon={icon}
        {...iconProps}
      />
    </button>
  );
};

export default IconButton;
