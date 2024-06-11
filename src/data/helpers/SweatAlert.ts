// utils/swalUtils.js
import Swal from 'sweetalert2';

export const showConfirmation = async () => {
  const result = await Swal.fire({
    title: 'Are you sure?',
    text: "You won't be able to revert this!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes, delete it!',
  });

  return result.isConfirmed;
};

export const showDeletedMessage = () => {
  Swal.fire({
    title: 'Deleted!',
    text: 'Your file has been deleted.',
    icon: 'success',
  });
};

export const showError = () => {
  Swal.fire({
    title: 'Error!',
    text: 'An error occurred while deleting.',
    icon: 'error',
  });
};
