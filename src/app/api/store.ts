import { configureStore } from '@reduxjs/toolkit';
import authSlice from '../../features/auth/authSlice';
import { setupListeners } from '@reduxjs/toolkit/query';
import { apiSlice } from './apiSlice';
import commonSlice from '../../features/commonbranch/commonbranch';
import  partnerFormMap  from '../../features/map/MapSlice';
import commonBranch from '../../features/commonbranch/commonbranch';
import partnerSlice from '../../features/partner/partnerSlice';
import  productSlice  from '../../features/product/productSlice';
import paginationSlice from '../../features/pagination/paginationSlice';
import categorySlice from '../../features/category/categorySlice';
import balanceSlice from '../../features/balance/balanceSlice';
import settingsSlice from '../../features/auth/settingsSlice';
import branchSlice from '../../features/branch/branchSlice';
import operatoreSlice from '../../features/operator/operatoreSlice';
export const store = configureStore({
  
  reducer: {
    commonSlice:commonSlice,
    commonBranches:commonBranch,
    partnerSlice:partnerSlice,
    productSlice:productSlice,
    partnerMap:partnerFormMap,
    PaginationSlice:paginationSlice,
    categorySlice:categorySlice,
    balance:balanceSlice,
    settings:settingsSlice,
    branch:branchSlice,
    operator:operatoreSlice,
    [apiSlice.reducerPath]:apiSlice.reducer,

    auth: authSlice,
    
  },
  middleware:(getDefaultMiddleware)=>getDefaultMiddleware({
    serializableCheck: false,
  }).concat(apiSlice.middleware),

  devTools: true,
});
setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
