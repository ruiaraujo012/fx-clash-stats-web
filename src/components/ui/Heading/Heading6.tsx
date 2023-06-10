import { twMerge } from 'tailwind-merge';
import type { TFunctionDetailedResult } from 'i18next';

interface Props {
  className?: string;
  children: string | number | TFunctionDetailedResult;
}

const Heading6 = (props: Props) => {
  const { children, className } = props;

  return <h6 className={twMerge('text-lg font-bold dark:text-white mb-3', className)}>{children as string}</h6>;
};

export default Heading6;
