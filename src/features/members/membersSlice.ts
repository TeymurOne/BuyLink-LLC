import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface MembersSlice {
  showimg: any;
  fullname: string;
  position: string;
  membertypes: any;
  images: any;
  load: boolean;
  memberId:any
}

const initialState: MembersSlice = {
  showimg: '',
  fullname: '',
  position: '',
  membertypes: '',
  images: '',
  load: false,
  memberId:""
};

const membersSlice = createSlice({
  name: 'memberSlice',
  initialState,
  reducers: {
   
    setImageUrl(state, action: PayloadAction<any>) {
      console.log(action.payload, 'action');
      
      return {...state, showimg:action.payload}
      
        
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
    setLoad(state, action){
        return {...state, load:action.payload}
    },
    setId(state, action){
      return {...state, memberId:action.payload}
  },
    resetMembersState: (state) => initialState
  },
});

export const {
  setImageUrl,
  setFullName,
  setPosition,
  setMembersType,
  setLoad,
  setId,
  resetMembersState
} = membersSlice.actions;
export default membersSlice.reducer;
