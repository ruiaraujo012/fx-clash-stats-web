import { twMerge } from 'tailwind-merge';
import type { TFunctionDetailedResult } from 'i18next';

interface Props {
  className?: string;
  children: string | number | TFunctionDetailedResult;
}

const Heading3 = (props: Props) => {
  const { children, className } = props;

  return <h3 className={twMerge('text-3xl font-bold dark:text-white mb-3', className)}>{children as string}</h3>;
};

export default Heading3;
