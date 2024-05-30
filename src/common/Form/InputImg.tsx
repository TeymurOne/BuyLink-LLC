import defaultSelectedImg from '../../images/partnyor/addimg.svg';
interface ImgInput {
  img?: any;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  showimg?:any
}
const InputImg: React.FC<ImgInput> = ({ img, onChange, showimg }) => {
  console.log(showimg, 'images');
  
  return (
    <>
      <div className=" col-span-full">
        <label htmlFor="photo" className="block text-sm font-medium leading-6">
          Photo
        </label>
        <div className="mt-6 flex h-20 items-center gap-x-3">
          <img
            className="h-15 mb-4 object-cover rounded-xl bg-white   w-20 "
            src={ showimg || defaultSelectedImg}
            alt="Member Photo "
          />
          <input
            id="file-upload"
            name="file-upload"
            type="file"
            className="py-2 sr-only"
            onChange={onChange}
          />
          <label
            htmlFor="file-upload"
            className="rounded-md bg-white lg:px-13 md:px-10 px-6 mb-3 border py-2.5   text-sm
                     font-semibold shadow-sm   border-black border-opacity-20  h-10"
          >
            Add Image
          </label>
          <input type="hidden" placeholder="Add-img" onChange={onChange} />
        </div>
      </div>
    </>
  );
};

export default InputImg;
