const CardTeam = () => {
  return (
    <>
      <div className=" w-full max-w-70  rounded-3xl  bg-gray10 shadow-3  lg:mb-20">
        <div className="  flex flex-col items-center px-3 py-2">
          <div className=" h-36  rounded-full ">
            <img
              className="h-ful  w-full object-cover"
              src="https://st3.depositphotos.com/15648834/17930/v/450/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg"
              alt=""
            />
          </div>
        </div>
        <div className=" flex flex-col items-center pt-10 ">
          <h2 className=" font-poppins  text-2xl font-semibold text-black ">
            Teymur Ekberov
          </h2>
          <p className=" text-lg text-black">“CEO & Founder“</p>
          <button className="border-0 px-4 py-2 text-lg   ">Wiev more</button>
        </div>
      </div>
    </>
  );
};

export default CardTeam;
