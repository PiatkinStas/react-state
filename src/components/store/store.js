import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../slice/counterSlice';
import arrayReducer from '../slice/newSlice';
import functionSlice from '../reduxComp/functionSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    arr: arrayReducer,
    func: functionSlice,
  },
});
