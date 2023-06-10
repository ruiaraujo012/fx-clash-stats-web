import { twMerge } from 'tailwind-merge';
import type { TFunctionDetailedResult } from 'i18next';

interface Props {
  className?: string;
  children: string | number | TFunctionDetailedResult;
}

const Heading1 = (props: Props) => {
  const { children, className } = props;

  return <h1 className={twMerge('text-5xl font-extrabold dark:text-white mb-3', className)}>{children as string}</h1>;
};

export default Heading1;
