import { isRouteErrorResponse, useRouteError } from 'react-router-dom';

import * as Sentry from '@sentry/react';

import NavBar from '@/layouts/appLayout/NavBar';

const ErrorPage = () => {
  const error = useRouteError();

  console.log('error >> ', error);

  if ((error as TypeError).message.includes('Failed to fetch dynamically imported module')) {
    window.location.reload();
  }

  Sentry.captureException(error);

  return (
    <>
      <NavBar />

      <div className='mt-16 p-3 flex-1'>
        <h1 className='text-4xl font-extrabold dark:text-white'>Oops...</h1>

        <p className='my-4 text-lg text-gray-500'>
          {isRouteErrorResponse(error) ? 'Invalid page.' : 'Sorry, an unexpected error has occurred.'}
        </p>
      </div>
    </>
  );
};

export default ErrorPage;
