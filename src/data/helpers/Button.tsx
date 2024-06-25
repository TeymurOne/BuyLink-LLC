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
    <div className="flex items-center justify-end gap-x-6">
      <button
        onClick={onCancel}
        type="button"
        className="text-sm font-semibold leading-6"
      >
        {t('product.9')}
      </button>
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
          } cursor-pointer bg-btnBgColor px-6  py-2 text-sm  font-semibold text-white shadow-sm dark:text-white`}
        >
          {children || t('product.10')}
        </button>
      )}
    </div>
  );
};

export default CancelSaveButton;
