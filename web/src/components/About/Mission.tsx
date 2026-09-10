import target from '../../images/about/mission/target.svg';
import mission from '../../images/about/mission/mission.png';
import mission2 from '../../images/about/mission/mission2.png';
import mission3 from '../../images/about/mission/mission3.png';
import React from 'react';

const Mission = () => {
  return (
    <div className="w-full bg-white">
      <div className="mx-auto max-w-6xl px-10">
        <h2 className="flex items-center justify-center font-poppins text-2xl font-semibold text-primary md:text-4xl lg:text-6xl">
          <img src={target} alt="About Target" /> Missiya
        </h2>
        <p className="mx-auto text-center font-poppins text-xl font-normal text-black md:text-lg lg:text-title-xl">
          Bizim missiyamız insanları tövsiyələrdən faktiki fayda əldə edə
          biləcəkləri bir sosial şəbəkədə birləşdirməkdir.
        </p>
        <img
          src={mission}
          alt="Mission Target"
          className="mx-auto w-full max-w-125"
        />
      </div>
      <div className="container mx-auto px-4 py-20 md:px-10 lg:px-26">
        <div className="grid w-full grid-cols-mission_sm   gap-10 md:grid-cols-mission_lg  ">
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

interface TMission {
  img?: string;
  title: string | number;
  desc: string;
}

const MissionCard: React.FC<TMission> = ({ img, title, desc }) => {
  return (
    <>
      <div className="group relative  w-full overflow-hidden">
        <img
          src={img}
          alt="Mission2 Target"
          className="h-full  w-full  object-cover"
        />
        <div className="absolute bottom-0 h-full translate-y-100 overflow-hidden  rounded-[33px]  p-10  duration-1000 hover:transition-all	 hover:duration-1000  group-hover:translate-y-0 group-hover:bg-black/50 ">
          <div>
            <h2 className="  font-poppins text-xl font-bold text-white lg:text-3xl">
              {title}
            </h2>
            <p className="pt-10 font-poppins  text-2xl font-normal text-white">
              {desc}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Mission;
