import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { FilterObj } from 'types/filter-types';

const initialState = {
  name: '',
  brand: '',
  categories: [],
  manufacture: '',
  volume: -1,
  price: {
    min: 0,
    max: Number.MAX_SAFE_INTEGER,
  },
  rating: 0,
};

const filterSlice = createSlice({
  name: 'filter',
  initialState: initialState as FilterObj | string,
  reducers: {
    setFilter(_, action: PayloadAction<FilterObj | string>) {
      return action.payload;
    },
  },
});

export const { setFilter } = filterSlice.actions;
export default filterSlice.reducer;
