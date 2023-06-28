import { twMerge } from 'tailwind-merge';

interface Props {
  className?: string;
  children: string | string[] | number;
}

const Heading6 = (props: Props) => {
  const { children, className } = props;

  return <h6 className={twMerge('text-lg font-bold dark:text-white mb-3', className)}>{children as string}</h6>;
};

export default Heading6;
