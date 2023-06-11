import { twMerge } from 'tailwind-merge';
import type { ReactNode } from 'react';

interface Props {
  term: string;
  children: ReactNode | ReactNode[];
  className?: string;
}

const DefinitionItem = (props: Props) => {
  const { children, term, className } = props;

  return (
    <dl className={twMerge('flex flex-col text-center', className)}>
      <div className='flex flex-col justify-center h-full'>
        <dt className='text-sm font-normal text-gray-600 dark:text-gray-400'>{term}</dt>
      </div>

      <dd className='text-base font-bold text-gray-900 dark:text-white'>{children}</dd>
    </dl>
  );
};

export default DefinitionItem;
