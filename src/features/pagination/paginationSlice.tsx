import { createSlice } from '@reduxjs/toolkit';

interface PaginationSlice {
  page: number;
  allPages: number;
}

const initialState: PaginationSlice = {
  page: 1,
  allPages: 0,
};

const paginations = createSlice({
  name: 'pagination',
  initialState,
  reducers: {
    setDecrement(state) {
      return { ...state, page: state.page > 1 ? state.page - 1 : state.page };
    },
    setIncrement(state) {
      return {
        ...state,
        page: state.page < state.allPages ? state.page + 1 : 1,
      };
    },
    pageLength(state, action) {
      return { ...state, allPages: action.payload };
    },
    setPaginationCurrent(state, action) {
      return { ...state, page: action.payload };
    },
     resetPagination(state) {
      return initialState;
    },
  },
});

export const { pageLength, resetPagination, setPaginationCurrent, setIncrement, setDecrement } =
  paginations.actions;
export default paginations.reducer;
