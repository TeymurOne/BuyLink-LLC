import { apiSlice } from '../../app/api/apiSlice';

export interface IfetchMemberType {
  id: number;
  name: string;
}

export interface IMemberApiResponse {
  id: number;
  full_name: string;
  position: string;
  image: string;
  keyword: string;
}

export interface IMemberAll {
  data: IfetchMemberType[];
}

export const productSlice = apiSlice
  .enhanceEndpoints({ addTagTypes: ['Post'] })
  .injectEndpoints({
    endpoints: (builder) => ({
      fetchProducttype: builder.query({
        query: () => ({
          url: '/product/categories',
          method: 'GET',
        }),
        providesTags: ['Post'],
      }),
      fetchProducPagination: builder.query({
        query: ({ page, keyword }) => ({
          url: `/product/all?page=${page}&keyword=${keyword}`,
          method: 'GET',
        }),
        providesTags: ['Post'],
      }),
      fetchProductAll: builder.query({
        query: () => ({
          url: '/product/all',
          method: 'GET',
        }),
        providesTags: ['Post'],
      }),
      removeProduct: builder.mutation({
        query: (id) => ({
          url: `/product/delete/${id}`,
          method: 'DELETE',
        }),
        invalidatesTags: ['Post'],
      }),
      postProductType: builder.mutation({
        query: (dataPost) => ({
          url: '/product/store',
          method: 'POST',
          body: dataPost,
        }),
        invalidatesTags: ['Post'],
      }),
      editProduct: builder.query({
        query: (id) => ({
          url: `/product/get/${id}`,
          method: 'GET',
        }),
        providesTags: ['Post'],
      }),
      updateProduct: builder.mutation({
        query: ({ postData, idUrl }) => ({
          url: `/product/update/${idUrl}`,
          method: 'POST',
          body: postData,
        }),
        invalidatesTags: ['Post'],
      }),
    }),
  });

export const {
  useFetchProducttypeQuery,
  useFetchProducPaginationQuery,
  useRemoveProductMutation,
  usePostProductTypeMutation,
  useLazyEditProductQuery,
  useUpdateProductMutation,
  useFetchProductAllQuery,
} = productSlice;
