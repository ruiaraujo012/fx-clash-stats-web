import { type ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

interface Props {
  cardClassName?: string;
  children: ReactNode | ReactNode[];
}

const Card = (props: Props) => {
  const { children, cardClassName } = props;

  return (
    <div
      className={twMerge(
        'bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 overflow-hidden',
        cardClassName,
      )}
    >
      {children}
    </div>
  );
};

export default Card;
