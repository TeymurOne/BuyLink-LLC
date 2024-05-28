import { Star } from "./RatingStar";

export function RevieItem({ item }: any) {
    
    
    return (
   <>
      <div className=" pr-10    py-6  p-3  rounded-lg  ">
        <div className="flex flex-wrap justify-between items-center">
          <span className="flex items-center space-x-2">
            <img
              className="w-[34px] h-[34px] rounded-2xl"
              src={item.user?.image || ''}
              alt={item.user?.name || ''}
            />
            <h2>{item.user?.name}</h2>
            <h2></h2>
          </span>
          <Star size={10} average_rating={item.rating}/>

        </div>
  
        <div>
          <p className="text-[13px] leading-5">{item.description || ''}</p>
       
        </div>
   
      </div>
      



   </>

    );
  }