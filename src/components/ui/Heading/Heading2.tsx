import { twMerge } from 'tailwind-merge';
import type { TFunctionDetailedResult } from 'i18next';

interface Props {
  className?: string;
  children: string | number | TFunctionDetailedResult;
}

const Heading2 = (props: Props) => {
  const { children, className } = props;

  return <h2 className={twMerge('text-4xl font-bold dark:text-white mb-3', className)}>{children as string}</h2>;
};

export default Heading2;
