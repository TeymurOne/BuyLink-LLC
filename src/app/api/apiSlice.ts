import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';
import { BASAE_URL } from '../../data/mock/enviroments';
import { RootState } from './store';
import getState from '../../data/helpers/cookie';

const getCookieToken = getState();

const baseQuery = fetchBaseQuery({
  baseUrl: BASAE_URL,
  prepareHeaders: (headers, { getState }) => {
    const state = getState() as RootState;
    const token = state.auth.token || getCookieToken;

    if (token) {
      headers.set('authorization', `Bearer ${token}`);
    }

    return headers;
  },
  credentials: 'include',
});

export const apiSlice = createApi({
  reducerPath: 'apiSlice',
  baseQuery: async (args, api, extraOptions) => {

    if (typeof args === 'string') {
      args = { url: args };
    }

    const selectedPartnerId = localStorage.getItem('selectedPartnerId') ;
    console.log(selectedPartnerId);
    args.params = {
      ...args.params,
      partnerId: selectedPartnerId,
    };


    const result = await baseQuery(args, api, extraOptions);

    return result;
  },

  endpoints: (builder) => ({}),
});
