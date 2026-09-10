import { Star } from './RatingStar';

export function RevieItem({ item }: any) {
  return (
    <>
      <div className=" rounded-lg    p-3  py-6  pr-10  ">
        <div className="flex flex-wrap items-center justify-between">
          <span className="flex items-center space-x-2">
            <img
              className="h-8 w-8 rounded-2xl"
              src={item.user?.image || ''}
              alt={item.user?.name || ''}
            />
            <h2>{item.user?.name}</h2>
            <h2></h2>
          </span>
          <Star size={10} average_rating={item.rating} />
        </div>

        <div>
          <p className="text-sm leading-5">{item.description || ''} </p>
        </div>
      </div>
    </>
  );
}
