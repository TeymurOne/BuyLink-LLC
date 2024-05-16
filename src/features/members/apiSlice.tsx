import { apiSlice } from '../../app/api/apiSlice';

export interface IfetchMemberType {
  id: number;
  name: string;
}
export interface IMemberApiResponse {
  id: number;
  full_name: string;
  member_type:any
  position: string;
  image: string;
}
export interface IMemberAll {
  data: IMemberApiResponse[];
  meta: MetaAll;
}
export interface MetaAll {
  total: number;
  per_page: number;
}

export const membersApi = apiSlice.enhanceEndpoints({addTagTypes: ['Post'],
  })
  .injectEndpoints({
    endpoints: (builder) => ({
      fetchMemberType: builder.query<IfetchMemberType[], void>({
        query: () => ({
          url: '/member/types',
          method: 'GET',
        }),
        providesTags: ['Post'],
      }),
      fetchMemberData: builder.query<IMemberAll, void>({
        query: (page) => ({
          url: `/member/all?page=${page}`,
          method: 'GET',
        }),

        transformResponse: (response: any) => {
          if (response && response.data) {
            response.data.sort((a: any, b: any) => b.id - a.id);
          }
          return response;
        },

        providesTags: ['Post'],
      }),
      deleteMember: builder.mutation({
        query: (id) => ({
          url: `member/delete/${id}`,
          method: 'DELETE',
        }),
        invalidatesTags: ['Post'],
      }),
      updateGetMember: builder.query({
        query: (id) => ({
          url: `/member/get/${id}`,
          method: 'GET',
          invalidatesTags: ['Post'],
        }),
      }),
      updateMember: builder.mutation({
        query: ({ postData, memberId }) => ({
          url: `member/update/${memberId}`,
          method: 'POST',
          body: postData,
        }),
        invalidatesTags: ['Post'],
      }),
      postMember: builder.mutation({
        query: (dataPost) => ({
          url: '/member/store',
          method: 'POST',

          body: dataPost,
        }),
        invalidatesTags: ['Post'],
      }),
    }),
  });

export const {
  useFetchMemberTypeQuery,
  useFetchMemberDataQuery,
  usePostMemberMutation,
  useDeleteMemberMutation,
  useLazyUpdateGetMemberQuery,
  useUpdateMemberMutation,
} = membersApi;
