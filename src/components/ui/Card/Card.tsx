import { twMerge } from 'tailwind-merge';
import type { DetailedHTMLProps, HTMLAttributes } from 'react';

interface Props extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  cardClassName?: string;
}

const Card = (props: Props) => {
  const { children, cardClassName, ...other } = props;

  return (
    <div
      className={twMerge(
        'bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 overflow-hidden',
        cardClassName,
      )}
      {...other}
    >
      {children}
    </div>
  );
};

export default Card;
