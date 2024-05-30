import { Link } from 'react-router-dom';
import { useGetReviewQuery } from '../../features/statistcs/apiSlice';
import { Star } from '../RatingStar';

const ChatCard = () => {
  const { data, isSuccess } = useGetReviewQuery('');
  console.log(data?.data, 'a');
  if (!isSuccess) return;



  return (
    <div className=" rounded-sm xl:border-l   col-span-full  mt-3  bg-white   dark:border-strokedark dark:bg-boxdark  xl:col-span-7">
      <div id="chat" className="h-75  overflow-y-auto">
        {data?.data.map((chat: any, key: number) => (
          <Link
            to="#"
            className="flex items-center justify-around  max-w-125 w-full mx-auto mb-4 gap-5 py-10 px-7.5 shadow rounded-2xl hover:bg-gray-3 dark:hover:bg-meta-4"
            key={key}
          >
            <div className=" h-8 w-8 rounded-full">
              <img
                src={
                  chat.user == null
                    ? 'https://cdn-icons-png.flaticon.com/512/149/149071.png'
                    : chat.user?.image
                }
                alt="User"
              />
            </div>

            <div className="flex flex-1  items-start justify-between">
              <div>
                <h5 className="font-medium text-black dark:text-white">
                  {chat.user==null ? "":chat?.user.name}
                </h5>
                <p>
                  <span className="text-sm text-black dark:text-white">
                    {chat?.description==null ? "":chat?.description}
                  </span>
                </p>
              </div>
              <Star average_rating="5" size={4} />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ChatCard;
