import { createSlice } from '@reduxjs/toolkit';

export const partnerMap = createSlice({
  name: 'partnerMap',
  initialState: [
    {
      lat: null,
      lng: null,
    },
  ],

  reducers: {
    partnerFormMap: (state, action) => {
      return {
        ...state,
        lat: action.payload?.lat,
        lng: action.payload?.lng,
      };
    },
  },
});
export default partnerMap.reducer;

export const { partnerFormMap } = partnerMap.actions;
export const selectLat = (state:any) => state.partnerMap.lat;
export const selectLng = (state:any) => state.partnerMap.lng;
