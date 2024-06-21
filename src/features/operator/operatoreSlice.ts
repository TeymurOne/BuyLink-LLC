import { createSlice } from '@reduxjs/toolkit';

interface OperatoreT {
  load: boolean;
  name: string;
  email: string;
  password: string;

}

const initialState: OperatoreT = {
  load: false,
  name: '',
  email: '',
  password: '',

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
  
    setLoad(state, action) {
      return { ...state, load: action.payload };
    },
    resetState(state){
      return {...state, name:"", email:"", password:"",}
    }
  },
});

export const { setName, setLoad, resetState, setEmail, setPwd } = operatorSlice.actions;
export default operatorSlice.reducer;
