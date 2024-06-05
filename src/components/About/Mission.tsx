import target from '../../images/about/mission/target.svg';
import mission from '../../images/about/mission/mission.png';
import mission2 from '../../images/about/mission/mission2.png';
import mission3 from '../../images/about/mission/mission3.png';
import React from 'react';
const Mission = () => {
  return (
    <div className="bg-white w-full">
      <div className="max-w-6xl px-10 mx-auto">
        <h2 className="flex items-center justify-center font-poppins font-semibold text-primary lg:text-6xl md:text-4xl text-2xl">
          <img src={target} alt="About Target" /> Missiya
        </h2>
        <p className="font-normal text-black mx-auto text-center font-poppins lg:text-title-xl md:text-lg text-xl">
          Bizim missiyamız insanları tövsiyələrdən faktiki fayda əldə edə
          biləcəkləri bir sosial şəbəkədə birləşdirməkdir.
        </p>
        <img
          src={mission}
          alt="Mission Target"
          className="mx-auto max-w-125 w-full"
        />
      </div>
      <div className="container py-20 lg:px-26 md:px-10 px-4 mx-auto">
        <div className="gap-10 grid md:grid-cols-mission_lg   grid-cols-mission_sm w-full  ">
        
          <MissionCard
            img={mission2}
            title="Endirimlərin əldə olunması"
            desc="Istifadeci endirimden yalniz tovsiye esasind yeni referal link   vasitesile yararlana biler"
          />
           <MissionCard
            img={mission3}
            title="Məhdudiyyətlər"
            desc="Istifadeci endirimden yalniz tovsiye esasind yeni referal link   vasitesile yararlana biler"
          />
         
        </div>
      </div>
    </div>
  );
};
interface TMission{
  img?:string,
  title:string | number,
  desc:string
}

const MissionCard:React.FC<TMission> = ({ img, title, desc }) => {
  return (
    <>
      <div className="w-full group  relative overflow-hidden">
        <img
          src={img}
          alt="Mission2 Target"
          className="w-full  object-cover  h-full"
        />
        <div className="absolute group-hover:bg-black/50     bottom-0 translate-y-100 group-hover:translate-y-0  rounded-[33px]  h-full  hover:transition-all duration-1000	 hover:duration-1000  overflow-hidden p-10 ">
        <div>
        <h2 className="  text-white lg:text-3xl text-xl font-poppins font-bold">
            {title}
          </h2>
          <p className="text-2xl pt-10  font-poppins font-normal text-white">
            {desc}
          </p>
        </div>
        </div>
      </div>
    
    </>
  );
};

export default Mission;
