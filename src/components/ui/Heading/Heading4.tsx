import { twMerge } from 'tailwind-merge';
import type { TFunctionDetailedResult } from 'i18next';

interface Props {
  className?: string;
  children: string | number | TFunctionDetailedResult;
}

const Heading4 = (props: Props) => {
  const { children, className } = props;

  return <h4 className={twMerge('text-2xl font-bold dark:text-white mb-3', className)}>{children as string}</h4>;
};

export default Heading4;
