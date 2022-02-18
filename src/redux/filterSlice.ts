import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface FilterType {
  name: string;
  brand: string;
  categories: string[];
  manufacture: string;
  volume: number;
  price: number;
  rating: number;
}

const initialState: FilterType = {
  name: '',
  brand: '',
  categories: [],
  manufacture: '',
  volume: -1,
  price: Number.MAX_SAFE_INTEGER,
  rating: 0,
};

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setFilter(_, action: PayloadAction<FilterType>) {
      return action.payload;
    },
  },
});

export const { setFilter } = filterSlice.actions;
export default filterSlice.reducer;
