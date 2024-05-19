import { createSlice } from '@reduxjs/toolkit';
interface productSlice {
  name: any | {};
  desc: any | {};
  price: string | number;
  discount: string | number;
  categoryId: string | number;
  load: boolean;
  imgurl: string;
  filesImg: any;
  active: string;
  error: string;
}

const initialState: productSlice = {
  name: {
    az: '',
    en: '',
    ru: '',
  },
  desc: {
    az: '',
    en: '',
    ru: '',
  },
  price: '',
  discount: '',
  categoryId: '',
  load: false,
  imgurl: '',
  filesImg: '',
  active: 'az',
  error: '',
};

const productSlice = createSlice({
  name: 'productSlice',
  initialState,
  reducers: {
    setPrice(state, action) {
      return { ...state, price: action.payload };
    },
    setcategoryId(state, action) {
      return { ...state, categoryId: action.payload };
    },
    setActive(state, action) {
      return { ...state, active: action.payload };
    },
    setLoad(state, action) {
      return { ...state, load: action.payload };
    },
    setDiscount(state, action) {
      return { ...state, discount: action.payload };
    },
    setimgUrl(state, action) {
      return { ...state, imgurl: action.payload };
    },
    setimgfiles(state, action) {
      return { ...state, filesImg: action.payload };
    },
    setName(state, action) {
      const { language, value, az, en, ru } = action.payload;

      if (az || en || ru) {
        return {
          ...state,
          name: {
            ...state.name,
            ['az']: az,
            ['en']: en,
            ['ru']: ru,
          },
        };
      }

      return {
        ...state,
        name: {
          ...state.name,
          [language]: value,
        },
      };
    },

    setDesc(state, action) {
      const { language, value, az, en, ru } = action.payload;
      if (az || en || ru) {
        return {
          ...state,
          desc: {
            ...state.desc,
            ['az']: az,
            ['en']: en,
            ['ru']: ru,
          },
        };
      }
      return {
        ...state,
        desc: {
          ...state.desc,
          [language]: value,
        },
      };
    },
    setError(state, action) {
      return { ...state, error: action.payload };
    },

    setReset: (state) => initialState,
  },
});

export const {
  setPrice,
  setError,
  setReset,
  setimgUrl,
  setDesc,
  setName,
  setimgfiles,
  setDiscount,
  setLoad,
  setActive,
  setcategoryId,
} = productSlice.actions;
export default productSlice.reducer;
