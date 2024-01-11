import {
  
  createApi,
  fetchBaseQuery,
} from '@reduxjs/toolkit/dist/query/react';
import { BASAE_URL } from '../../data/mock/enviroments';
import getState from '../../core/helpers/cookie';
const token = getState();

export const apiSlice = createApi({
  reducerPath: 'apiSlice',
  baseQuery: fetchBaseQuery({
    baseUrl: BASAE_URL,
  
    prepareHeaders: (headers) => {
      headers.set('Authorization', `Bearer ${token}`);
      return headers;
    },
    credentials: 'include',
  }),

  endpoints: (builder) => ({}),
});

