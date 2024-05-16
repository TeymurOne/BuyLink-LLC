import { configureStore } from '@reduxjs/toolkit';
import authSlice from '../../features/auth/authSlice';
import { setupListeners } from '@reduxjs/toolkit/query';
import { apiSlice } from './apiSlice';
import commonSlice from '../../features/members/memberSlice';
import editSlice from '../../features/members/editSlice';
import  partnerFormMap  from '../../features/map/MapSlice';
import membersSlice from '../../features/members/membersSlice';
import partnerSlice from '../../features/partner/partnerSlice';
export const store = configureStore({
  
  reducer: {
    commonSlice:commonSlice,
    memberSlice:membersSlice,
    partnerSlice:partnerSlice,
    editSlice:editSlice,
    partnerMap:partnerFormMap,
    [apiSlice.reducerPath]:apiSlice.reducer,

    auth: authSlice,
    
  },
  middleware:(getDefaultMiddleware)=>getDefaultMiddleware().concat(apiSlice.middleware),

  devTools: true,
});
setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
