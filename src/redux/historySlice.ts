import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const historySlice = createSlice({
  name: 'history',
  initialState: [] as string[],
  reducers: {
    historyAdded(state, action: PayloadAction<string>) {
      const newTerm = action.payload.toLowerCase();
      return [newTerm, ...state.filter((term) => term !== newTerm)];
    },
    historyDeleted(state, action: PayloadAction<string>) {
      return state.filter((term) => term !== action.payload);
    },
    historyCleared() {
      return [];
    },
  },
});

export const { historyAdded, historyCleared, historyDeleted } =
  historySlice.actions;

export default historySlice.reducer;
