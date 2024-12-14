import { createSlice } from '@reduxjs/toolkit';

const navSlice = createSlice({
  name: 'nav',
  initialState: {
    isOpening: false,
  },
  reducers: {
    onCloseModalLogin: (state) => {
      state.isOpening = false;
    },
    onOpenModalLogin: (state) => {
      state.isOpening = true;
    }
  },
});

export const { onCloseModalLogin, onOpenModalLogin } = navSlice.actions;
export default navSlice.reducer;