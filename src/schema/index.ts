import  * as  yup from 'yup';


export const basicSchemas=yup.object().shape({
    price:yup.string().required('Price yaz').max(10)
})