import axios, { AxiosError } from 'axios';
import { BASAE_URL } from '../../data/mock/enviroments';
import { getState } from '../../data/helpers/cookie';
import { logOut } from '../../features/auth/authSlice.ts';
import store from '../../app/api/store.ts';

const token = getState();

const axiosInstance = axios.create({
  baseURL: BASAE_URL,
  headers: {
    Authorization: `Bearer ${token} `,
  },
});

axiosInstance.interceptors.response.use(
  function onSuccess(response) {
    return response;
  },

  async function onError(error: AxiosError) {
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
