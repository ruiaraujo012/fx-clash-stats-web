import { twMerge } from 'tailwind-merge';
import type { DetailedHTMLProps, HTMLAttributes } from 'react';

type Props = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

const Card = (props: Props) => {
  const { children, className, ...other } = props;

  return (
    <div
      className={twMerge(
        'bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 overflow-hidden',
        className,
      )}
      {...other}
    >
      {children}
    </div>
  );
};

export default Card;
