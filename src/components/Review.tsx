import { IoMdStar } from 'react-icons/io';
interface Item {
  description: null | string;
  id: number;
  rating:number
  user: {
    email: string;
    id: number;
    image: string;
    name: string;
    username: string | null;
  };
}

const Review: React.FC<{ item: Item }> = ({ item }) => {
  return (
    <>
      <div className="w-[450px] h-[145px] p-3 shadow-4 rounded-lg  ">
        <div className="flex justify-between items-center">
          <span className="flex items-center space-x-2">
            <img
              className="w-[34px] h-[34px] rounded-2xl"
              src={item?.user.image}
              alt={item?.user.name}
            />
            <h2>{item?.user.name}</h2>
          </span>
          <span className="flex items-center py-2">
            <p className="text-[10px]"> {item?.rating}/5</p>{' '}
            <IoMdStar style={{ color: '#FCD34D' }} />
          </span>
        </div>

        <div>
          <p className="text-[13px] leading-5">{item?.description}</p>
        </div>
      </div>
    </>
  );
};

export default Review;
