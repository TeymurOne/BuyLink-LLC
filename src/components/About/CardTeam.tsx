
const CardTeam = () => {
  return (
    <>
      <div className=" max-w-70 w-full  lg:mb-20  rounded-3xl bg-gray10  shadow-3">
            <div className="  flex flex-col items-center py-2 px-3">
              <div className=" rounded-full  h-36 ">
                <img
                  className="w-full  h-ful object-cover"
                  src="https://st3.depositphotos.com/15648834/17930/v/450/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg"
                  alt=""
                />
              </div>
            </div>
            <div className=" flex flex-col items-center pt-10 ">
              <h2 className=" text-2xl  font-semibold text-black font-poppins ">Teymur Ekberov</h2>
              <p className=" text-lg text-black">“CEO & Founder“</p>
              <button className="border-0 text-lg py-2 px-4   ">
                Wiev more
              </button>
            </div>
          </div>
    </>
  );
};

export default CardTeam;
