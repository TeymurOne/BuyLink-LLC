import { createSlice } from '@reduxjs/toolkit';
interface Iuser{
  id:number,
  email:string,
  phone:string
}

interface AuthState {
  user: Iuser  | null;
  token: any;
  logOut: any;
  name: any;
  phone: any;
  image:any
}

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null,
    token: null,
    logOut: null,
    name: null,
    phone: null,
    image:null
  } as AuthState,
  reducers: {
    setCredentials: (state, action) => {
      state.user = action.payload;
    },
    setToken:(state, action)=>{
      state.token=action.payload
    },
    logOut: (state) => {
      state.user = null;

      state.token = null;
    },
    setUser: (state, action) => {
      console.log(action.payload);
      state.user = action.payload;
    },
    setImage:(state, action)=>{
     
      
    
      
      state.image=action.payload
    }
  },
});

export const { setCredentials, logOut, setUser , setImage,  setToken} = authSlice.actions;
export default authSlice.reducer;

export const selectCurrentToken = (state: { auth: AuthState }): any =>
  state.auth.token;
export const selectCurrentUser = (state: { auth: AuthState }): any =>
  state.auth.user;
export const selectCurrentLogout = (state: { auth: AuthState }): any =>
  state.auth.logOut;
export const selectCurrentImage=(state:{auth:AuthState}):any=>state.auth.image