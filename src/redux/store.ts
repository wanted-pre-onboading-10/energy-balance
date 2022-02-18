import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';

import historyReducer from 'redux/historySlice';
import filterReducer from 'redux/filterSlice';

export const store = configureStore({
  reducer: {
    history: historyReducer,
    filter: filterReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
