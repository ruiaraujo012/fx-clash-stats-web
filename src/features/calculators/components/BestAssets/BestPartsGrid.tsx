import type { ReactNode } from 'react';

interface Props {
  children: ReactNode | ReactNode[];
}

const BestPartsGrid = (props: Props) => {
  const { children } = props;

  return (
    <div className='grid justify-items-center max-sm:grid-cols-1 max-lg:grid-cols-2 max-2xl:grid-cols-3 grid-cols-4 gap-5'>
      {children}
    </div>
  );
};

export default BestPartsGrid;
