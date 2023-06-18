import { twMerge } from 'tailwind-merge';

interface Props {
  className?: string;
}

const Hr = (props: Props) => {
  const { className } = props;

  return <hr className={twMerge('h-px my-2 bg-gray-200 border-0 dark:bg-gray-700', className)} />;
};

export default Hr;
