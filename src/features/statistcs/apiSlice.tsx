import { apiSlice } from '../../app/api/apiSlice';

export const statisticSlice = apiSlice
  .enhanceEndpoints({ addTagTypes: ['transactions'] })
  .injectEndpoints({
    endpoints: (builder) => ({
      getStatistics: builder.query({
        query: () => ({
          url: `/statistics`,
          method: 'GET',
        }),
        providesTags: ['transactions'],
      }),
      getReview: builder.query({
        query: () => ({
          url: `/reviews`,
          method: 'GET',
        }),
        providesTags: ['transactions'],
      }),
      getBalance: builder.query({
        query: () => ({
          url: `/balance`,
          method: 'GET',
        }),
      }),
      getTransactions: builder.query({
        query: ({ filter, operator }) => ({
          url: `/dashboard-transactions?filter=${filter || ''}&operator=${operator || ''}`,
          method: 'GET',
        }),
        providesTags: ['transactions'],
      }),

      getDueTo: builder.query({
        query: () => ({
          url: `/payment-transactions`,
          method: 'GET',
          invalidatesTags: ['transactions'],
        }),
      }),
    }),
  });
export const {
  useGetStatisticsQuery,
  useGetBalanceQuery,
  useGetReviewQuery,
  useGetTransactionsQuery,
  useGetDueToQuery,
} = statisticSlice;
