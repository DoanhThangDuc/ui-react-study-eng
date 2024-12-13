import { createSlice } from '@reduxjs/toolkit';

interface ModalSliceDriver {
  isOpen: boolean;
}
const initialState: ModalSliceDriver = {
  isOpen: true,
};

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    onOpenModal: (state) => {
      state.isOpen =  true;
    },
    onCloseModal: (state) => {
      state.isOpen =  false;
    }
  }
});

export const { onOpenModal, onCloseModal } = modalSlice.actions;
export default modalSlice.reducer;