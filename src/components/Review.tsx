import { IoMdStar } from 'react-icons/io';

const Review = () => {
  return (
    <>
      <div className="w-[450px] h-[145px] p-3 shadow-4 rounded-lg  ">
        <div className="flex justify-between items-center">
          <span className="flex items-center space-x-2">
            <img
              className="w-[34px] h-[34px] rounded-2xl"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpROJRJrt5hx-PvBRJGdtWP5qFUhros5kxu2Z_xCz4aXwDkHWjaHHgP0ehQMj1EjvHk7Q&usqp=CAU"
              alt="User Profile"
            />
            <h2>Teymuraz Akbarov</h2>
          </span>
          <span className="flex items-center py-2">
            <p className="text-[10px]"> 4.5/5</p>{' '}
            <IoMdStar style={{ color: '#FCD34D' }} />
          </span>
        </div>

        <div>
          <p className="text-[13px] leading-5">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Necessitatibus ab natus dolores ratione magni voluptatibus quibusdam
          </p>
        </div>
      </div>
      
    </>
  );
};

export default Review;
