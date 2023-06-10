import { twMerge } from 'tailwind-merge';
import type { ReactNode } from 'react';

interface Props {
  className?: string;
  children: ReactNode | ReactNode[];
}

const AssetHeadingContainer = (props: Props) => {
  const { children, className } = props;

  return (
    <div className={twMerge('flex flex-row gap-3 items-center justify-between mb-3 flex-wrap', className)}>
      {children}
    </div>
  );
};

export default AssetHeadingContainer;
