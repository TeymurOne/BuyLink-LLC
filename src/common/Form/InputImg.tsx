import { useTranslation } from 'react-i18next';
import defaultSelectedImg from '../../images/partnyor/addimg.svg';

interface ImgInput {
  img?: any;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  showimg?: any;
  required?: boolean;
}

const InputImg: React.FC<ImgInput> = ({ onChange, showimg, required }) => {
  const { t } = useTranslation();
  return (
    <>
      <div className=" col-span-full">
        <label
          htmlFor="photo"
          className="ml-1 mt-6 block text-sm font-medium leading-6 dark:text-white300"
        >
          {t('partnerinfo.3')}
          {required && <span className="pl-1 text-red-600">*</span>}
        </label>
        <div className="mt-2 flex h-20 items-center gap-x-3">
          <img
            className="mb-4 h-15 w-20 rounded-xl bg-white object-cover"
            src={showimg || defaultSelectedImg}
            alt="Member Photo "
          />
          <input
            id="file-upload"
            name="file-upload"
            type="file"
            className="sr-only py-2"
            onChange={onChange}
          />
          <label
            htmlFor="file-upload"
            className="mb-3 h-10 rounded-md border border-black border-opacity-20 bg-white px-6 py-2.5 text-sm
                     font-semibold shadow-sm dark:text-black md:px-10 lg:px-13"
          >
            {t('product.15')}
          </label>
          <input type="hidden" placeholder="Add-img" onChange={onChange} />
        </div>
      </div>
    </>
  );
};

export default InputImg;
