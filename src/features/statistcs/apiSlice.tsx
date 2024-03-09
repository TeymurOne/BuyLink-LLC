import { apiSlice } from '../../app/api/apiSlice';

export const branchSlice = apiSlice
  .enhanceEndpoints({ addTagTypes: ['branch'] })
  .injectEndpoints({
    endpoints: (builder) => ({
      getStatistics: builder.query({
        query: () => ({
          url: `/statistics`,
          method: 'GET',
        }),
      }),
      getReview: builder.query({
        query: () => ({
          url: `/reviews`,
          method: 'GET',
        }),
      }),
      getBalance: builder.query({
        query: () => ({
          url: `/balance`,
          method: 'GET',
        }),
      }),
    }),
  });
export const { useGetStatisticsQuery, useGetBalanceQuery, useGetReviewQuery } = branchSlice;
