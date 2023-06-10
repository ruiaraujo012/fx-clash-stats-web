import { twMerge } from 'tailwind-merge';
import type { TFunctionDetailedResult } from 'i18next';

interface Props {
  className?: string;
  children: string | number | TFunctionDetailedResult;
}

const Heading5 = (props: Props) => {
  const { children, className } = props;

  return <h5 className={twMerge('text-xl font-bold dark:text-white mb-3', className)}>{children as string}</h5>;
};

export default Heading5;
