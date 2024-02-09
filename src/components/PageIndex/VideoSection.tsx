
function VideoSection() {
  return (
    <>
      <section>

        <div className="flex     items-center justify-between " id="videoSection">
        <div className="max-w-[890px] sm:pl-10 pl-0    flex items-center  flex-col justify-center ">
          <div className="max-w-[384px] pr-5  text-center lg:text-start w-full space-y-4">
           <h2 className="   text-2xl  text-black font-bold">Explainer <span className="text-[#4C5DF5]">Video</span></h2>
            <p className="lg:text-[16px]  text-[14px] leading-5 lg:leading-6   font-poppins  text-[#000000ad] font-medium">
              The video shows in basic  how the applications works .
              We cover different industries in one platform
            </p>
            <button className="bg-[#4C5DF5]  rounded text-white text-[16px] max-w-[329px] w-full lg:w-[200px]   h-[60px]">
              Try it now
            </button>
          </div>
        </div>
        <div className="max-w-[100%] lg:max-w-[65%]     w-full   mt-10     bg-black-2  ">
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
