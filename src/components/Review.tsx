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

const Review: React.FC<{ item ?: Item }> = ({ item }) => {
  if (!item) {
    return (
      <div className="max-w-[250px] w-full py-10  shadow-6 rounded-lg mx-auto  ">
        <div className="flex justify-between items-center">
          <span className="flex items-center space-x-2">
            <img
              className="w-[34px] h-[34px] rounded-2xl"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSX9xsNtAFzjZFBzLzTQyIAOfzLC0EyYsHoQ&usqp=CAU"
              alt="Photo"
            />
            <h2>User Name</h2>
            <h2></h2>
          </span>

          <Star average_rating={0} size={10} /> {/* Assuming average_rating is used */}
        </div>

        <div>
          <p className="text-[13px] leading-5 py-2">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem
            similique laudantium accusantium doloremque nobis culpa eos sequi
            ....
          </p>
        </div>
      </div>
    );
  } else {
    return (
      <div className=" py-6  w-[290px] px-4   rounded-lg  ">
        <div className="flex justify-between items-center">
          <span className="flex items-center space-x-2">
            <img
              className="w-[34px] h-[34px] rounded-2xl"
              src={item.user?.image || ''}
              alt={item.user?.name || ''}
            />
            <h2>{item.user?.name}</h2>
            <h2></h2>
          </span>

          <Star average_rating={item.rating || 0} size={10} /> 
        </div>

        <div>
          <p className="text-[13px] leading-5">{item.description || ''}</p>
        </div>
      </div>
    );
  }
};

export default Review;