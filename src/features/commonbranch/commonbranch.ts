import { createSlice } from '@reduxjs/toolkit';

export const commonSlice = createSlice({
  name: 'commonSlice',
  initialState: [
    {
      lat: 0,
      lng: 0,
    },
  ],

  reducers: {
    branchMaps: (state, action) => {
      return {
        ...state,
        lat: action.payload.lat,
        lng: action.payload.lng,
      };
    },
  },
});

export default commonSlice.reducer;

export const { branchMaps } = commonSlice.actions;
