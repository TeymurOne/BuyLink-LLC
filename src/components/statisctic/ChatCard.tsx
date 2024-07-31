import { Link } from 'react-router-dom';
import { useGetReviewQuery } from '../../features/statistcs/apiSlice';
import { Star } from '../RatingStar';
import { formatDistanceToNow, parseISO } from 'date-fns';

const ChatCard = () => {
  const { data, isSuccess } = useGetReviewQuery('');
  if (!isSuccess) return null;

  const sortedData = data?.data.slice().sort((a, b) => {
    return new Date(b.created_at).getTime() - new Date(a.created_at).getTime();
  });

  return (
    <div className="col-span-full mt-3 rounded-sm border-black border-opacity-40 bg-white dark:border-white dark:bg-boxdark xl:col-span-7 xl:border-l">
      <div id="chat" className="h-75 overflow-y-auto">
        {sortedData.map((chat, key) => {
          const createdAt = parseISO(chat.created_at);
          const today = new Date();
          const isWithinWeek = today - createdAt <= 7 * 24 * 60 * 60 * 1000;
          const timeDisplay = isWithinWeek
            ? formatDistanceToNow(createdAt, { addSuffix: true })
            : createdAt.toLocaleDateString();

          return (
            <Link
              to="#"
              className="mx-auto mb-4 flex w-full max-w-125 items-center justify-around gap-5 rounded-2xl px-7.5 py-10 shadow hover:bg-gray-3 dark:hover:bg-meta-4"
              key={key}
            >
              <div className="flex h-8 w-8 items-center justify-center overflow-hidden rounded-full">
                <img
                  src={
                    chat.user == null
                      ? 'https://cdn-icons-png.flaticon.com/512/149/149071.png'
                      : chat.user?.image
                  }
                  alt="User"
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="flex flex-1 items-start justify-between">
                <div>
                  <h5 className="font-medium text-black dark:text-white">
                    {chat.user == null ? '' : chat?.user.name}
                  </h5>
                  <p className="text-[10px] font-normal text-[#979797]">
                    {chat.created_at == null ? '' : timeDisplay}
                  </p>
                  <p>
                    <span className="text-sm text-black dark:text-white">
                      {chat?.description == null ? '' : chat?.description}
                    </span>
                  </p>
                </div>
                <Star average_rating="5" size={4} />
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default ChatCard;
