import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface MembersSlice {
  showimg: any;
  fullname: string;
  position: string;
  membertypes: any;
  images: any;
  load: boolean;
  memberId: any;
}

const initialState: MembersSlice = {
  showimg: '',
  fullname: '',
  position: '',
  membertypes: '',
  images: '',
  load: false,
  memberId: '',
};

const membersSlice = createSlice({
  name: 'memberSlice',
  initialState,
  reducers: {
    setShowImg(state, action: PayloadAction<any>) {
      return { ...state, showimg: action.payload };
    },
    setImage(state, action: PayloadAction<any>) {
      return { ...state, images: action.payload };
    },
    setFullName(state, action: PayloadAction<string>) {
      return { ...state, fullname: action.payload };
    },
    setPosition(state, action: PayloadAction<string>) {
      return { ...state, position: action.payload };
    },
    setMembersType(state, action: PayloadAction<string>) {
      return { ...state, membertypes: action.payload };
    },
    setLoad(state, action) {
      return { ...state, load: action.payload };
    },
    setId(state, action) {
      return { ...state, memberId: action.payload };
    },

    resetState: (state) => {
      state.fullname = '';
      state.position = '';
      state.membertypes = '';
      state.load = false;
      state.images="";
      state.showimg=''
    },
  },
});

export const {
  setShowImg,
  setFullName,
  setPosition,
  setMembersType,
  setLoad,
  setImage,
  setId,
  resetState,
} = membersSlice.actions;
export default membersSlice.reducer;
