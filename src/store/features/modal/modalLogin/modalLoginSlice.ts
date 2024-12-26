import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { signup } from '../../../thunks/authThunks';
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

    handleSubmitLogin: (state) => {
      state.emailErrorMessage = setEmailError(state.emailAddress);
      state.passwordErrorMessage = setPasswordError(state.password);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(signup.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(signup.fulfilled, (state) => {
        state.loading = false;
        state.isOpen = false;
      })
      .addCase(signup.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export const {
  onOpenModal,
  onCloseModal,
  onEmailBlur,
  onPasswordBlur,
  onEmailChange,
  onPasswordChange,
  handleSubmitLogin,
} = modalLoginSlice.actions;

export default modalLoginSlice.reducer;
