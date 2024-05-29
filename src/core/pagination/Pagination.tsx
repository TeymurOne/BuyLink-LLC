import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import { useDispatch, useSelector } from 'react-redux';
import { setDecrement, setPaginationCurrent } from '../../features/pagination/paginationSlice';

export default function Pagination() {
  const { allPages , page} = useSelector((store: any) => store.PaginationSlice);
  const dispatch=useDispatch()
  const handlePagination = (id: number) => {
    dispatch(setPaginationCurrent(id))
   
  };

 
  const currentPages = Array.from({ length: allPages }).map((_, index) => (
    <button
      onClick={() => handlePagination(index + 1)}
      key={index}
      aria-current="page"
      className="relative focus:bg-bodydark2 focus:text-white inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset hover:bg-gray-3"
    >
      {index + 1}
    </button>
  ));

  return (
    <div className="flex items-center justify-between my-4 border-gray-200 px-4 py-3 sm:px-6">
      <div className="flex flex-1 justify-between sm:hidden">
        <button
          disabled={page === 1}
          onClick={()=>dispatch(setDecrement())}
          className={`relative ${page === 1 ? 'opacity-40' : 'opacity-100'} relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50`}
        >
          Previous
        </button>

        <button
          disabled={page === allPages}
          onClick={()=>dispatch(setDecrement())}
          className={`relative ${page === allPages ? 'opacity-40' : 'opacity-100'} relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50`}
        >
          Next
        </button>
      </div>
      {currentPages?.length > 1 && (
        <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
          <div>
            <p className="text-sm text-gray-700">
              Showing <span className="font-medium">{page}</span> to{' '}
              <span className="font-medium">{allPages}</span> of{' '}
              <span className="font-medium">{allPages}</span> results
            </p>
          </div>
          <div>
            <nav className="isolate inline-flex -space-x-px rounded-md shadow-sm" aria-label="Pagination">
              <button
                disabled={page === 1}
                onClick={()=>dispatch(setDecrement())}
                className={`relative ${page == 1 ? 'opacity-40' : 'opacity-100'} inline-flex items-center rounded-l-md px-2 py-2 ring-1 ring-inset ring-gray-300 hover:bg-gray-2 focus:z-20 focus:outline-offset-0`}
              >
                <span className="sr-only">Previous</span>
                <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
              </button>
              {currentPages}
              <button
                disabled={page === allPages}
                onClick={()=>dispatch(setDecrement())}
                className={`relative ${page == allPages ? 'opacity-40' : 'opacity-100'} inline-flex items-center rounded-r-md px-2 py-2 ring-1 ring-inset`}
              >
                <span className="sr-only">Next</span>
                <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
              </button>
            </nav>
          </div>
        </div>
      )}
    </div>
  );
}
