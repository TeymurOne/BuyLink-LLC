import main1 from '../../images/about/main/main1.png';
import main2 from '../../images/about/main/main2.png';
import main3 from '../../images/about/main/main3.png';
const Main = () => {
  return (
    <div className="w-full bg-white h-auto">
      <h2 className="font-poppins text-center lg:pt-20 pt-8 mb-15 font-semibold lg:text-5xl md:text-3xl text-2xl">
        Problem
      </h2>

      <div className="grid  lg:grid-cols-2 grid-cols-1 gap-10 container lg:px-16 md:px-10 px-4 mx-auto">
        {/* // Main left */}
        <div className="font-poppins space-y-5  bg-meta-7 ] rounded-[50px]  ">
          <div className="lg:p-10 p-8  space-y-6">
            <h4 className="lg:text-4xl md:text-3xl text-2xl font-semibold">
              İstifadəçilər üçün
            </h4>
            <p className="font-poppins lg:text-2xl text-xl font-normal">
              1. İnsanlar tövsiyələrə görə heç bir mükafat almırlar
            </p>
            <p className="font-poppins pb-4 lg:text-2xl text-xl  font-normal">
              2. Agentlər və vasitəçilər effektiv şəkildə qazana bilmirlər,
              çünki rəqəmsal həll yoxdur.
            </p>
          </div>
          <img src={main1} alt="About Main" className="overflow-hidden " />
        </div>
        <div className="font-poppins space-y-5  bg-meta-7 rounded-[50px]  ">
          <div className="lg:p-10 p-8 lg:space-y-6 md:space-y-4 space-y-4">
            <h4 className="lg:text-4xl md:text-3xl text-2xl font-semibold">
              İstifadəçilər üçün
            </h4>
            <p className="font-poppins lg:text-2xl text-xl font-normal">
              1. İnsanlar tövsiyələrə görə heç bir mükafat almırlar
            </p>
            <p className="font-poppins pb-4 lg:text-2xl text-xl font-normal">
              2. Agentlər və vasitəçilər effektiv şəkildə qazana bilmirlər,
              çünki rəqəmsal həll yoxdur.
            </p>
          </div>
          <img src={main2} alt="About Main" />
        </div>
      </div>
      <div className="bg-meta-1 rounded-[28px] -mt-20 mb-20 h-auto">
        <div className="container lg:px-16 md:px-10 px-4 mx-auto">
          <div className="grid pt-26 place-items-center lg:grid-cols-12 grid-cols-6 ">
            <div className="lg:col-span-7 col-span-full">
              <h4 className="text-white pb-4 lg:text-title-60 md:text-title-50 text-title-xl font-semibold font-inter">
                <span className="text-primary">BuyLink </span> - &nbsp;
                tövsiyyələr üzrə dünyanın ilk sosial şəbəkəsidi
              </h4>
              <p className="font-poppins lg:leading-10 leading-7 font-normal lg:text-2xl text-xl text-white">
                {' '}
                Biz biznesləri və istifadəçiləri qarşılıqlı faydalı ekosistemə
                birləşdiririk: Tərəfdaşlarımız müştəri bazasının, loyallığın və
                mənfəətinin artırılmasından, istifadəçilərimiz isə tövsiyələr
                nəticəsində endirimlər və bonuslardan yararlana bilərlər
              </p>
            </div>
            <div className="lg:col-span-4 col-span-full">
              <img src={main3} alt="About Main" className="w-auto h-full " />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
