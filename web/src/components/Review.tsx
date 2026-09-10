import { Star } from './RatingStar';

interface Item {
  description: string | null;
  id: number;
  rating: number;
  user: {
    email: string;
    id: number;
    image: string;
    name: string;
    username: string | null;
  };
}

const Review: React.FC<{ item?: Item }> = ({ item }) => {
  if (!item) {
    return (
      <div className="w-full max-w-[329px] rounded-xl bg-white px-4  py-4 shadow-6  ">
        <div className="flex items-center justify-between">
          <span className="flex items-center space-x-2">
            <img
              className="h-[34px] w-[34px] rounded-2xl"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSX9xsNtAFzjZFBzLzTQyIAOfzLC0EyYsHoQ&usqp=CAU"
              alt="Photo"
            />
            <h2>User Name</h2>
            <h2></h2>
          </span>
          <Star average_rating={0} size={10} />{' '}
          {/* Assuming average_rating is used */}
        </div>

        <div>
          <p className="py-2 text-[13px] leading-5">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem
            similique laudantium accusantium doloremque nobis culpa eos sequi
            ....
          </p>
        </div>
      </div>
    );
  } else {
    return (
      <>
        <div className=" w-full max-w-[329px]  rounded-lg bg-white px-4   py-6  ">
          <div className="flex items-center justify-between">
            <span className="flex items-center space-x-2">
              <img
                className="h-[34px] w-[34px] rounded-2xl"
                src={item.user?.image || ''}
                alt={item.user?.name || ''}
              />
              <h2>{item.user?.name}</h2>
              <h2></h2>
            </span>

            <Star average_rating={item.rating || 0} size={20} />
          </div>

          <div>
            <p className="text-[13px] leading-5">{item.description || ''}</p>
          </div>
        </div>
      </>
    );
  }
};

export default Review;
