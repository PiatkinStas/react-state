import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counterSlice';
import arrayReducer from './newSlice';
import functionSlice from './functionSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    arr: arrayReducer,
    func: functionSlice,
  },
});
