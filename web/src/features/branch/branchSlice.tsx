import { createSlice } from '@reduxjs/toolkit';

interface BranchSlice {
  id?: any;
  name: string;
  phone?: string | number;
  address: any;
  lat: any;
  lng: any;
  load?: boolean;
}

const initialState: BranchSlice = {
  address: '',
  phone: '',
  name: '',
  lat: 0,
  lng: 0,
  load: false,
};

const BranchSlice = createSlice({
  name: 'branchSlice',
  initialState,
  reducers: {
    setAddress(state, action) {
      return { ...state, address: action.payload };
    },
    setPhone(state, action) {
      return { ...state, phone: action.payload };
    },
    setName(state, action) {
      return { ...state, name: action.payload };
    },
    setLoad(state, action) {
      return { ...state, load: action.payload };
    },
    setLat(state, action) {
      return { ...state, lat: action.payload };
    },
    setLng(state, action) {
      return { ...state, lng: action.payload };
    },
    resetState(state) {
      return {
        ...state,
        address: '',
        phone: '',
        name: '',
        lat: '',
        lng: '',
        load: false,
      };
    },
  },
});

export const {
  setAddress,
  setLat,
  setLng,
  resetState,
  setLoad,
  setName,
  setPhone,
} = BranchSlice.actions;
export default BranchSlice.reducer;
