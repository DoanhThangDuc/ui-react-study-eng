import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ModalSliceDriver {
  isOpen: boolean;
}
const initialState: ModalSliceDriver = {
  isOpen: false,
};

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    onOpenModal: (state, action: PayloadAction<number>) => {
      state.isOpen =  true;
    },
    onCloseModal: (state, action: PayloadAction<number>) => {
      state.isOpen =  false;
    }
  }
});

export const { onOpenModal, onCloseModal } = modalSlice.actions;
export default modalSlice.reducer;