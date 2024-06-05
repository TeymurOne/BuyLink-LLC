interface TPartnerUi {
  img: string;
  desc: string;
  title: string;
}

const PartnerUi: React.FC<TPartnerUi> = ({ img, title, desc }) => {
  return (
    <>
      <div className="bg-white lg:px-3.5 px-2.5 py-7  border-graydark  rounded-xl border border-opacity-10 flex flex-col items-center justify-center  max-w-full w-full   shadow-3">
        <h2 className="text-center  text-title-xsm text-black font-manrope font-bold ">
          <img src={img} alt="p_icon1" className="inline-block mr-1 w-8 h-8" />
          {title}
        </h2>
        <p className="text-center text-xs text-black/50 font-poppins font-normal ">
          {' '}
          {desc}
        </p>
      </div>
    </>
  );
};

export default PartnerUi;
