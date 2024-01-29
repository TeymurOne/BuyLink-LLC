import { createSlice } from '@reduxjs/toolkit';

export const editSlice = createSlice({
  name: 'editslice',
  initialState: {
    editData:[]
  }, 
  reducers: {
    editResponse: (state, action) => {
      state.editData=action.payload
      
     
      
  
    },
  },
});

export default editSlice.reducer;


export const { editResponse } = editSlice.actions;
