import type { ReactNode } from 'react';

interface Props {
  children: ReactNode | ReactNode[];
}

const AssetsGrid = (props: Props) => {
  const { children } = props;

  return <div className='grid max-sm:grid-cols-1 max-2xl:grid-cols-3 grid-cols-4 gap-5'>{children}</div>;
};

export default AssetsGrid;
