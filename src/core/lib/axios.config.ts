import axios, { AxiosError } from 'axios';
import { BASAE_URL } from '../../data/mock/enviroments';
import { getState } from '../../data/helpers/cookie';
import { logOut } from '../../features/auth/authSlice.ts';
import store from '../../app/api/store.ts';

const axiosInstance = axios.create({
  baseURL: BASAE_URL,
});

axiosInstance.interceptors.request.use(
  (config) => {
    const token = getState();
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    config.params = { ...config.params, partnerId: 19 };
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

axiosInstance.interceptors.response.use(
  (response) => response,
  async (error: AxiosError) => {
    const statusCode = error.response?.status;
    const requestUrl = error.response?.config.baseURL;

    if (statusCode === 401 && requestUrl?.startsWith(BASAE_URL)) {
      store.dispatch(logOut());
      document.cookie =
        'token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
      window.location.href = '/';
    }

    throw error;
  },
);

export default axiosInstance;
