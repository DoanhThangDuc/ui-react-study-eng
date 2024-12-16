import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { validateEmail } from '../../shared/helpers/validateEmail';

interface ModalSliceDriver {
  isOpen: boolean;
  emailAddress: string;
  emailErrorMessage?: string;
  password: string;
  passwordErrorMessage?: string;
}

const initialState: ModalSliceDriver = {
  isOpen: false,
  emailAddress: '',
  emailErrorMessage: '',
  password: '',
  passwordErrorMessage: '',
};

const setEmailError = (email: string) => {
  if (!email) {
    return 'modal-login.email-required';
  }
  if (!validateEmail(email)) {
    return 'modal-login.email-invalid';
  }
  return '';
};

const setPasswordError = (password: string) => {
  if (!password) {
    return 'modal-login.password-required';
  }
  if (password.length < 8) {
    return 'modal-login.password-length-invalid';
  }
  if (!/[A-Z]/.test(password)) {
    return 'modal-login.password-uppercase-character';
  }
  if (!/[@$!%*?&#]/.test(password)) {
    return 'modal-login.password-special-character';
  }
  return '';
};

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    onOpenModal: () => {
      return { ...initialState, isOpen: true };
    },

    onCloseModal: (state) => {
      state.isOpen = false;
    },

    onEmailBlur: (state) => {
      state.emailErrorMessage = setEmailError(state.emailAddress);
    },

    onEmailChange: (state, action: PayloadAction<string>) => {
      state.emailAddress = action.payload.trim();
      state.emailErrorMessage = setEmailError(state.emailAddress);
    },

    onPasswordBlur: (state) => {
      state.passwordErrorMessage = setPasswordError(state.password);
    },

    onPasswordChange: (state, action: PayloadAction<string>) => {
      state.password = action.payload.trim();
      state.passwordErrorMessage = setPasswordError(state.password);
    },

    handleSubmitLogin: (state) => {
      state.emailErrorMessage = setEmailError(state.emailAddress);
      state.passwordErrorMessage = setPasswordError(state.password);

      if(state.emailErrorMessage ||state.passwordErrorMessage) {
        return;
      }
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
  handleSubmitLogin
} = modalSlice.actions;

export default modalSlice.reducer;
