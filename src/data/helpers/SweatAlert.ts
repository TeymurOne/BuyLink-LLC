import Swal from 'sweetalert2';
import { t } from 'i18next';

export const showConfirmation = async () => {
  const result = await Swal.fire({
    title: t('confirmation.1'),
    text: t('confirmation.2'),
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: t('confirmation.3'),
    cancelButtonText: t('confirmation.4'),
  });

  return result.isConfirmed;
};

export const showDeletedMessage = () => {
  Swal.fire({
    title: t('deleted.1'),
    text: t('deleted.2'),
    icon: 'success',
  });
};

export const showError = () => {
  Swal.fire({
    title: t('error.1'),
    text: t('error.2'),
    icon: 'error',
  });
};
