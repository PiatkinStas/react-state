import { createSlice } from '@reduxjs/toolkit';

const functionSlice = createSlice({
  name: 'functionSlice',
  initialState: {
    value: 1,
    hit: 1,
    uno(a) {
      return a * a;
    },
  },
  reducers: {
    square: (state) => {
      state.value = state.uno(state.hit++);
    },
  },
});

export const { square } = functionSlice.actions;
export default functionSlice.reducer;
