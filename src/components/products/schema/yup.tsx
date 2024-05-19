import * as yup from 'yup';

export const validationSchema = yup.object().shape({
  price: yup.string().required('Price is required').matches(/^\d+$/, 'Price must be a number'),
});
