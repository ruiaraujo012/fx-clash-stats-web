import { type ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

type Severity = 'info' | 'danger' | 'success' | 'warning';

const twSeverity: { [severity in Severity]: string } = {
  danger: 'text-red-800 bg-red-50 dark:bg-red-900 dark:text-red-400',
  info: 'text-blue-800 bg-blue-50 dark:bg-blue-900 dark:text-blue-400',
  success: 'text-green-800 bg-green-50 dark:bg-green-900 dark:text-green-400',
  warning: 'text-yellow-800 bg-yellow-50 dark:bg-yellow-900 dark:text-yellow-400',
};

interface Props {
  className?: string;
  severity?: Severity;
  children: ReactNode | ReactNode[];
}

const Alert = (props: Props) => {
  const { children, className, severity = 'info' } = props;

  return (
    <div
      className={twMerge('p-4 mb-4 text-sm rounded-lg', twSeverity[severity], className)}
      role='alert'
    >
      {children}
    </div>
  );
};

export default Alert;
