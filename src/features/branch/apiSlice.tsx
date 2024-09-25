import { apiSlice } from '../../app/api/apiSlice';

export const branchSlice = apiSlice
  .enhanceEndpoints({ addTagTypes: ['branch'] })
  .injectEndpoints({
    endpoints: (builder) => ({
      fetchBranchAll: builder.query({
        query: (page) => ({
          url: `/branch/all?page=${page}`,
          method: 'GET',
        }),
        providesTags: ['branch'],
      }),
      postBranch: builder.mutation({
        query: (formdata) => ({
          url: '/branch/store',
          method: 'POST',
          body: formdata,
        }),
        invalidatesTags: ['branch'],
      }),
      removebranch: builder.mutation({
        query: (id) => ({
          url: `/branch/delete/${id}`,
          method: 'DELETE',
        }),
        invalidatesTags: ['branch'],
      }),
      postUpdate: builder.mutation({
        query: ({ postData, id }) => ({
          url: `/branch/update/${id}`,
          method: 'POST',
          body: postData,
        }),
        invalidatesTags: ['branch'],
      }),
      getUpdate: builder.query({
        query: (id) => ({
          url: `/branch/get/${id}`,
          method: 'GET',
        }),
        providesTags: ['branch'],
      }),
      getDueTo: builder.query({
        query: () => ({
          url: `/payments`,
          method: 'GET',
        }),
        providesTags: ['branch'],
      }),
    }),
  });
export const {
  useFetchBranchAllQuery,
  useGetDueToQuery,
  useRemovebranchMutation,
  usePostBranchMutation,
  usePostUpdateMutation,
  useLazyGetUpdateQuery,
} = branchSlice;
