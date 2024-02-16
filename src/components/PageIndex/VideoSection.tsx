import { useTranslation } from "react-i18next";

function VideoSection() {
  const {t}=useTranslation()
  return (
    <>
      <section className="px-4" id="about">
        <div
          className="flex  space-x-4 min-h-[480px]     items-center justify-between "
          id="videoSection"
        >
          <div className="max-w-[890px] sm:pl-10 lg:pl-0    flex items-center  flex-col justify-center ">
            <div className="max-w-[384px]   text-center lg:text-start w-full lg:space-y-10 space-y-6">
              <div>
                <h2 className="   text-2xl  text-[#4C5DF5] font-bold">
                  {t("index-main.3")}
                </h2>
                <p className="lg:text-[16px] mt-2  text-[14px] leading-5 lg:leading-6   font-poppins  text-[#000000ad] font-medium">
                {t("index-main.4")}
                </p>
              </div>
              <button className="bg-[#4C5DF5]  rounded text-white font-thin text-[16px] max-w-[379px] w-full lg:w-[200px]   h-[60px]">
              {t("index-main.5")}
              </button>
            </div>
          </div>
          <div className="max-w-[100%] lg:max-w-[65%] w-full   mt-10   rounded-lg     bg-black-2  ">
            <video
              id="myVideo"
              width="100%"
              className="bg-black-2 object-contain  w-full    max-h-[370px]     rounded-lg  "
              controls={true}
            >
              <source src="./video.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      </section>
    </>
  );
}

export default VideoSection;
