import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Category {
  language: string;
  filteredData: any[];
  search: string;
}

const initialState: Category = {
  language: 'az',
  filteredData: [],
  search: '',
};

const categorySlice = createSlice({
  name: 'categorySlice',
  initialState,
  reducers: {
    setLanguage(state, action: PayloadAction<string>) {
      state.language = action.payload;
    },
    setFilterData(state, action: PayloadAction<any[]>) {
      state.filteredData = action.payload;
    },
  
  },
});

export const { setLanguage, setFilterData } = categorySlice.actions;
export default categorySlice.reducer;
