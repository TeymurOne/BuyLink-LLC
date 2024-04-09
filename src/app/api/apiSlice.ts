import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';
import { BASAE_URL } from '../../data/mock/enviroments';
import { RootState } from './store';
import getState from '../../core/helpers/cookie';

const getCookieToken = getState();

export const apiSlice = createApi({
  reducerPath: 'apiSlice',
  baseQuery: fetchBaseQuery({
    baseUrl: BASAE_URL,

    prepareHeaders: (headers, { getState }) => {
      const state = getState() as RootState;
      console.log(state, 'state');
      

      const token = state.auth.token || getCookieToken;

      if (token) {
        headers.set('authorization', `Bearer ${token}`);
      }

      return headers;
    },
    credentials: 'include',
  }),

  endpoints: (builder) => ({}),
});
