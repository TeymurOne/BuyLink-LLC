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

export const operatorApi = apiSlice
  .enhanceEndpoints({ addTagTypes: ['Branch'] })
  .injectEndpoints({
    endpoints: (builder) => ({
      fetchOperator: builder.query<Post, any>({
        query: () => ({
          url: '/operator/all',
          method: 'GET',
        }),
        providesTags: ['Branch'],
      }),
      postOperator: builder.mutation({
        query: (formdata) => ({
          url: '/operator/store',
          method: 'POST',
          body: formdata,
        }),
        invalidatesTags: ['Branch'],
      }),
      updateOperator: builder.mutation({
        query: ({ postData, id }) => ({
          url: `/operator/update/${id}`,
          method: 'POST',
          body: postData,
        }),
        invalidatesTags: ['Branch'],
      }),
      updateOperatorGet: builder.query({
        query: (id: number) => ({
          url: `/operator/get/${id}`,
          method: 'GET',
        }),
      }),
      deleteOperator: builder.mutation({
        query: (id) => ({
          url: `/operator/delete/${id}`,
          method: 'DELETE',
        }),
        invalidatesTags: ['Branch'],
      }),
      fetchBranchAll: builder.query({
        query: () => ({
          url: `/branch/all`,
          method: 'GET',
        }),
      }),
    }),
  });

export const {
  useDeleteOperatorMutation,
  useUpdateOperatorMutation,
  useLazyUpdateOperatorGetQuery,
  usePostOperatorMutation,
  useFetchOperatorQuery,
  useLazyFetchOperatorQuery,
  useFetchBranchAllQuery,
} = operatorApi;
