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
    // Если args - это строка, преобразуем его в объект
    if (typeof args === 'string') {
      args = { url: args };
    }

    // Добавляем параметр к URL
    args.params = {
      ...args.params,
      partnerId: '19',
    };

    // Выполняем базовый запрос с модифицированными параметрами
    const result = await baseQuery(args, api, extraOptions);

    // Можно обработать результат перед возвратом, если нужно
    return result;
  },

  // baseQuery: fetchBaseQuery({
  //   baseUrl: BASAE_URL,
  //   paramsSerializer: (params) => {
  //     // Ensure params is an object
  //     const newParams = { ...(params || {}), partnerId: 19 };
  //
  //     // Serialize the params object
  //     return new URLSearchParams(newParams as Record<string, string>).toString();
  //   },
  //

  // }),

  endpoints: (builder) => ({}),
});
