import { createSlice } from "@reduxjs/toolkit";

interface TinitialState {
  total_revenue: string;
  cash_till: string;
  due_buyLink: string;
  net_amount: string;
  buylink_wallet: string;
  debt_date:string
  filtered_transactions:[],
  filter:string
}

const initialState: TinitialState = {
  total_revenue: "",
  cash_till: "",
  due_buyLink: "",
  net_amount: "",
  buylink_wallet: "",
  debt_date:"",
  filtered_transactions:[],
  filter:""
}


const balanceSlice = createSlice({
  name: 'balance',
  initialState,
  reducers: {
    setTotalRevenue: (state, action) => {
      
      state.total_revenue = action.payload;
    },
    setCashTill: (state, action) => {
      state.cash_till = action.payload;
    },
    setDueBuyLink: (state, action) => {
      state.due_buyLink = action.payload;
    },
    setNetAmount: (state, action) => {
      state.net_amount = action.payload;
    },
    setBuylinkWallet: (state, action) => {
      state.buylink_wallet = action.payload;
    },
    setTransactions:(state, action)=>{
      state.filtered_transactions=action.payload
    
      
    },
    setFilter:(state, action)=>{
      state.filter=action.payload

    },
    setDate:(state, action)=>{
      state.debt_date=action.payload
    }
  }
});

export const { setTotalRevenue, setDate, setFilter, setTransactions, setCashTill, setDueBuyLink, setNetAmount, setBuylinkWallet } = balanceSlice.actions;
export default balanceSlice.reducer;
