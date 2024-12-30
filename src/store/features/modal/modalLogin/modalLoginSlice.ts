import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { setEmailError } from '../../../../shared/helpers/setEmailError';
import { setPasswordError } from '../../../../shared/helpers/setPasswordError';

export interface ModalLoginSliceDriver {
  isOpen: boolean;
  loading: boolean;
  error: string | null;
  emailAddress: string;
  emailErrorMessage?: string;
  password: string;
  passwordErrorMessage?: string;
}

const initialState: ModalLoginSliceDriver = {
  isOpen: false,
  loading: false,
  error: null,
  emailAddress: '',
  emailErrorMessage: '',
  password: '',
  passwordErrorMessage: '',
};

const modalLoginSlice = createSlice({
  name: 'modalLogin',
  initialState,
  reducers: {
    onOpenModal: (state) => {
      state.isOpen = true;
    },

    onCloseModal: (state) => {
      state.isOpen = false;
    },

    onEmailBlur: (state) => {
      state.emailErrorMessage = setEmailError(state.emailAddress);
    },

    onEmailChange: (state, action: PayloadAction<string>) => {
      state.emailAddress = action.payload.trim();
      state.emailErrorMessage = '';
    },

    onPasswordBlur: (state) => {
      state.passwordErrorMessage = setPasswordError(state.password);
    },

    onPasswordChange: (state, action: PayloadAction<string>) => {
      state.password = action.payload.trim();
      state.passwordErrorMessage = '';
    },

    setValidationErrors: (state, action: PayloadAction<{ emailErrorMessage: string; passwordErrorMessage: string }>) => {
      state.emailErrorMessage = action.payload.emailErrorMessage;
      state.passwordErrorMessage = action.payload.passwordErrorMessage;
    },
  },
});

export const {
  onOpenModal,
  onCloseModal,
  onEmailBlur,
  onPasswordBlur,
  onEmailChange,
  onPasswordChange,
  setValidationErrors,
} = modalLoginSlice.actions;

export default modalLoginSlice.reducer;
