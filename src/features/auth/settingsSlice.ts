import { createSlice } from '@reduxjs/toolkit';

interface TinitialState {
  name: string | number;
  mail: string;

  oldPwd: string;
  newPwd: string;
}

const initialState: TinitialState = {
  name: '',
  mail: '',

  oldPwd: '',
  newPwd: '',
};

const settingSlice = createSlice({
  name: 'settings',
  initialState,
  reducers: {
    setName: (state, action) => {
      state.name = action.payload;
    },
    setMail: (state, action) => {
      state.mail = action.payload;
    },
    setoldPwd: (state, action) => {
      state.oldPwd = action.payload;
    },
    setNewPwd: (state, action) => {
      state.newPwd = action.payload;
    },
  },
});

export const {setoldPwd, setNewPwd} = settingSlice.actions;
export default settingSlice.reducer;
