import { apiSlice } from '../../app/api/apiSlice';

export interface Post {
  data: Idata;
  links?: any;
  meta?: any;
}

export interface Idata {
  id: number;
  name: string;
  email: string;
  password: number;
}

export const partnerApi = apiSlice
  .enhanceEndpoints({ addTagTypes: ['Branch'] })
  .injectEndpoints({
    endpoints: (builder) => ({
      fetchPartnerrAll: builder.query({
        query: () => ({
          url: `/get`,
          method: 'GET',
        }),
      }),
      PostPartnerrAll: builder.mutation({
        query: (postData) => ({
          url: `/update`,
          method: 'POST',
          body: postData,
        }),
      }),
    }),
  });

export const { useFetchPartnerrAllQuery, usePostPartnerrAllMutation } =
  partnerApi;
