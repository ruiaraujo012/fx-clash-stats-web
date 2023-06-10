import { type ReactNode } from 'react';

type MaxWidth = 'full' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';

const twMaxWidth: { [maxWidth in MaxWidth]: string } = {
  '2xl': 'max-w-screen-2xl',
  full: 'max-w-none',
  lg: 'max-w-screen-lg',
  md: 'max-w-screen-md',
  sm: 'max-w-screen-sm',
  xl: 'max-w-screen-xl',
};

interface Props {
  maxWidth?: MaxWidth;
  children: ReactNode | ReactNode[];
}

const Container = (props: Props) => {
  const { children, maxWidth = 'full' } = props;

  return (
    <div className='flex justify-center w-full'>
      <div className={twMaxWidth[maxWidth]}>{children}</div>
    </div>
  );
};

export default Container;
