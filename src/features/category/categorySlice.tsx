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
    setSearch(state, action: PayloadAction<string>) {
      state.search = action.payload;
    },
    searchAction(state) {
      if (state.search.trim() !== '') {
        state.filteredData = state.filteredData.filter((item) => {
          return item.name[state.language]
            ?.toLocaleLowerCase()
            .includes(state.search.toLocaleLowerCase());
        });
      } else {
        state.filteredData = [];
      }
    },
  },
});

export const { setLanguage, searchAction, setSearch, setFilterData } = categorySlice.actions;
export default categorySlice.reducer;
