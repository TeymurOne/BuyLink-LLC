import { createSlice } from '@reduxjs/toolkit';

interface TinitialState {
  total_revenue: string;
  cash_till: string;
  due_to_buyLink: string;
  net_amount: string;
  buylink_wallet: string;
  debt_date: string;
  filtered_transactions: [];
  filter: string;
  payments: string;
  total_debts: string;
  net_debts: string;
  operator: string;
}

const initialState: TinitialState = {
  total_revenue: '',
  cash_till: '',
  payments: '',
  total_debts: '',
  net_debts: '',
  due_to_buyLink: '',
  net_amount: '',
  buylink_wallet: '',
  debt_date: '',
  filtered_transactions: [],
  filter: '',
  operator: '',
};

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
      state.due_to_buyLink = action.payload;
    },
    setNetAmount: (state, action) => {
      state.net_amount = action.payload;
    },
    setBuylinkWallet: (state, action) => {
      state.buylink_wallet = action.payload;
    },
    setTransactions: (state, action) => {
      state.filtered_transactions = action.payload;
    },
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
    setOperator: (state, action) => {
      state.operator = action.payload;
    },
    setPayment: (state, action) => {
      state.payments = action.payload;
    },
    setDate: (state, action) => {
      state.debt_date = action.payload;
    },
    setTotalDebt: (state, action) => {
      state.total_debts = action.payload;
    },
    setNetDebt: (state, action) => {
      state.net_debts = action.payload;
    },
  },
});

export const {
  setTotalRevenue,
  setDate,
  setFilter,
  setTransactions,
  setCashTill,
  setDueBuyLink,
  setNetAmount,
  setBuylinkWallet,
  setNetDebt,
  setTotalDebt,
  setPayment,
  setOperator,
} = balanceSlice.actions;
export default balanceSlice.reducer;
