import { Link } from 'react-router-dom';

const ErrorPage = () => {
  return (
    <>
      <div className="flex h-screen w-full flex-col items-center justify-center">
        <div className="flex flex-col items-center justify-center">
          <p className="text-gray-800 mt-12 text-3xl md:text-4xl lg:text-5xl">
            Page Not Found
          </p>
          <p className="text-gray-600 mt-8 md:text-lg lg:text-xl">
            Sorry, the page you are looking for could not be found.
          </p>
          <a
            href="#"
            className="text-gray-100 mt-12 flex items-center space-x-2 rounded bg-blue-600 px-4 py-2 transition duration-150 hover:bg-blue-700"
            title="Return Home"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z"
                clipRule="evenodd"
              />
            </svg>
            <Link onClick={() => window.history.back()} to="/">
              Return Home
            </Link>
          </a>
        </div>
      </div>
    </>
  );
};

export default ErrorPage;
