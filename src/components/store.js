import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counterSlice';
import arrayReducer from './newSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    arr: arrayReducer,
  },
});