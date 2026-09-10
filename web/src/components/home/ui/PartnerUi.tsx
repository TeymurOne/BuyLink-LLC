interface TPartnerUi {
  img: string;
  desc: string;
  title: string;
}

const PartnerUi: React.FC<TPartnerUi> = ({ img, title, desc }) => {
  return (
    <>
      <div className="flex w-full max-w-full flex-col  items-center  justify-center rounded-xl border border-graydark border-opacity-10 bg-white px-2.5  py-7 shadow-3   lg:px-3.5">
        <h2 className="text-center  font-manrope text-title-xsm font-bold text-black ">
          <img
            src={img}
            alt="p_icon1"
            className="mb-2 mr-2 inline-block h-8 w-8"
          />
          {title}
        </h2>
        <p className="text-center font-poppins text-xs font-normal text-black/50 ">
          {' '}
          {desc}
        </p>
      </div>
    </>
  );
};

export default PartnerUi;
