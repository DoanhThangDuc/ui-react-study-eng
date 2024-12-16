import { createSlice } from '@reduxjs/toolkit';

interface ModalSliceDriver {
  isOpen: boolean;
  emailAddress: string;
  isEmailValid?: boolean;
  isPasswordValid?: boolean;
  password: string;
}
const initialState: ModalSliceDriver = {
  isOpen: false,
  emailAddress: '',
  isEmailValid: true,
  password: '',
  isPasswordValid: true,
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
    },
    onBlurInput: (state, payload) => {
      console.log('onBlurInput :>>, ', payload);
    }
  }
});

export const { onOpenModal, onCloseModal, onBlurInput } = modalSlice.actions;
export default modalSlice.reducer;