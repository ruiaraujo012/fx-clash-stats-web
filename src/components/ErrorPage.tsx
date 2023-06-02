import { isRouteErrorResponse, useRouteError } from 'react-router-dom';
import NavBar from '@/components/layouts/homeLayout/NavBar';

const ErrorPage = () => {
  const error = useRouteError();

  console.log('error >> ', error);

  return (
    <>
      <NavBar />

      <div className='p-5'>
        <h1 className='text-4xl font-extrabold dark:text-white'>Oops...</h1>

        <p className='my-4 text-lg text-gray-500'>
          {isRouteErrorResponse(error) ? 'Invalid page.' : 'Sorry, an unexpected error has occurred.'}
        </p>
      </div>
    </>
  );
};

export default ErrorPage;
