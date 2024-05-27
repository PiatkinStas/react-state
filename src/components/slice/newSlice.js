import { createSlice } from '@reduxjs/toolkit';

const arr = ['Johny', 'Jennifer', 'Erika', 'Go away'];

const arraySlice = createSlice({
  name: 'arrValue',
  initialState: { value: arr[0], index: 0 },
  reducers: {
    up: (state) => {
      if (state.index < arr.length - 1) {
        state.index += 1;
        state.value = arr[state.index];
      }
    },
    down: (state) => {
      if (state.index > 0) {
        state.index -= 1;
        state.value = arr[state.index];
      }
    },
  },
});

export const { up, down } = arraySlice.actions;
export default arraySlice.reducer;
