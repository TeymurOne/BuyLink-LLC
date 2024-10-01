import React from 'react';
import { useTranslation } from 'react-i18next';

type CancelSaveButtonProps = {
  onCancel?: () => void;
  onSave?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  btnDisabled?: boolean;
  loading?: boolean;
  children?: React.ReactNode;
};

const CancelSaveButton: React.FC<CancelSaveButtonProps> = ({
  onCancel,
  children,
  onSave,
  btnDisabled,
  loading,
}) => {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col items-center justify-end gap-x-4 gap-y-3 478px:flex-row">
      <button
        onClick={onCancel}
        type="button"
        className="order-2 w-full rounded-md bg-[#EFEFEF] px-8 py-3 text-sm font-medium leading-6 text-[#5B5B5B] 478px:order-1 478px:w-auto 478px:bg-transparent 478px:text-black"
      >
        {t('product.9')}
      </button>
      <div className="order-1 w-full 478px:order-2 478px:w-auto">
        {loading ? (
          <div
            className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
            role="status"
          >
            <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
              Loading...
            </span>
          </div>
        ) : (
          <button
            disabled={btnDisabled}
            onClick={onSave}
            type="submit"
            className={`rounded-md ${
              btnDisabled ? 'cursor-not-allowed opacity-65' : 'opacity-100'
            } w-full cursor-pointer bg-btnBgColor px-8 py-3 text-sm font-medium text-white shadow-sm dark:text-white 478px:w-auto`}
          >
            {children || t('product.10')}
          </button>
        )}
      </div>
    </div>
  );
};

export default CancelSaveButton;
