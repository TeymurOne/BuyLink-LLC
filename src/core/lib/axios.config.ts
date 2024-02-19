import axios from 'axios';
import { BASAE_URL } from '../../data/mock/enviroments';
import {getState} from '../helpers/cookie';



const token = getState();


  


const axiosInstance = axios.create({
  baseURL: BASAE_URL,
  headers: {
   Authorization: `Bearer ${token} `,
  },
});
export default axiosInstance;
