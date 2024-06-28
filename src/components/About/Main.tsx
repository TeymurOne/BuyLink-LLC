import main1 from '../../images/about/main/main1.png';
import main2 from '../../images/about/main/main2.png';
import main3 from '../../images/about/main/main3.png';

const Main = () => {
  return (
    <div className="h-auto w-full bg-white">
      <h2 className="mb-15 pt-8 text-center font-poppins text-2xl font-semibold md:text-3xl lg:pt-20 lg:text-5xl">
        Problem
      </h2>

      <div className="container  mx-auto grid grid-cols-1 gap-10 px-4 md:px-10 lg:grid-cols-2 lg:px-16">
        {/* // Main left */}
        <div className="] space-y-5  rounded-[50px] bg-meta-7 font-poppins  ">
          <div className="space-y-6 p-8  lg:p-10">
            <h4 className="text-2xl font-semibold md:text-3xl lg:text-4xl">
              İstifadəçilər üçün
            </h4>
            <p className="font-poppins text-xl font-normal lg:text-2xl">
              1. İnsanlar tövsiyələrə görə heç bir mükafat almırlar
            </p>
            <p className="pb-4 font-poppins text-xl font-normal  lg:text-2xl">
              2. Agentlər və vasitəçilər effektiv şəkildə qazana bilmirlər,
              çünki rəqəmsal həll yoxdur.
            </p>
          </div>
          <img src={main1} alt="About Main" className="overflow-hidden " />
        </div>
        <div className="space-y-5 rounded-[50px]  bg-meta-7 font-poppins  ">
          <div className="space-y-4 p-8 md:space-y-4 lg:space-y-6 lg:p-10">
            <h4 className="text-2xl font-semibold md:text-3xl lg:text-4xl">
              İstifadəçilər üçün
            </h4>
            <p className="font-poppins text-xl font-normal lg:text-2xl">
              1. İnsanlar tövsiyələrə görə heç bir mükafat almırlar
            </p>
            <p className="pb-4 font-poppins text-xl font-normal lg:text-2xl">
              2. Agentlər və vasitəçilər effektiv şəkildə qazana bilmirlər,
              çünki rəqəmsal həll yoxdur.
            </p>
          </div>
          <img src={main2} alt="About Main" />
        </div>
      </div>
      <div className="-mt-20 mb-20 h-auto rounded-[28px] bg-meta-1">
        <div className="container mx-auto px-4 md:px-10 lg:px-16">
          <div className="grid grid-cols-6 place-items-center pt-26 lg:grid-cols-12 ">
            <div className="col-span-full lg:col-span-7">
              <h4 className="pb-4 font-inter text-title-xl font-semibold text-white md:text-title-50 lg:text-title-60">
                <span className="text-primary">BuyLink </span> - &nbsp;
                tövsiyyələr üzrə dünyanın ilk sosial şəbəkəsidi
              </h4>
              <p className="font-poppins text-xl font-normal leading-7 text-white lg:text-2xl lg:leading-10">
                {' '}
                Biz biznesləri və istifadəçiləri qarşılıqlı faydalı ekosistemə
                birləşdiririk: Tərəfdaşlarımız müştəri bazasının, loyallığın və
                mənfəətinin artırılmasından, istifadəçilərimiz isə tövsiyələr
                nəticəsində endirimlər və bonuslardan yararlana bilərlər
              </p>
            </div>
            <div className="col-span-full lg:col-span-4">
              <img src={main3} alt="About Main" className="h-full w-auto " />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
