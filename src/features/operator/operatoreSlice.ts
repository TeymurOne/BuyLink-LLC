import { createSlice } from '@reduxjs/toolkit';

interface OperatoreT {
  load: boolean;
  name: string;
  email: string;
  password: string;
  branchID?: string;
}

const initialState: OperatoreT = {
  load: false,
  name: '',
  email: '',
  password: '',
  branchID: '',
};

const operatorSlice = createSlice({
  name: 'operatorSlice',
  initialState,
  reducers: {
    setName(state, action) {
      return { ...state, name: action.payload };
    },
    setPwd(state, action) {
  
      
      return { ...state, password: action.payload };
    },
    setEmail(state, action) {
      return { ...state, email: action.payload };
    },
    setBranch(state, action) {
      return { ...state, branchID: action.payload };
    },
    setLoad(state, action) {
      return { ...state, load: action.payload };
    },
  },
});

export const { setName, setLoad, setBranch, setEmail, setPwd } = operatorSlice.actions;
export default operatorSlice.reducer;
