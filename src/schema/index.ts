import  * as  yup from 'yup';


export const basicSchemas=yup.object().shape({
    fullname:yup.string().required('Fullname girmke zorunlu')
})