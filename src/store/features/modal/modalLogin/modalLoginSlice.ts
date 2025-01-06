import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getEmailError } from '../../../../shared/helpers/getEmailError';
import { getPasswordError } from '../../../../shared/helpers/getPasswordError';
import { handleSubmitLogin } from '../../../thunks/modalLoginThunks';

export type ErrorMessageType = 'Unauthorized' |'InvalidCredentials'
export interface ErrorMessage {
  debugMessage: string;
  options?: string;
  status: string;
  type: ErrorMessageType;
}

export interface ModalLoginSliceDriver {
  isOpen: boolean;
  isLoading: boolean;
  emailAddress: string;
  emailErrorMessage?: string;
  password: string;
  passwordErrorMessage?: string;
}

const initialState: ModalLoginSliceDriver = {
  isOpen: false,
  isLoading: false,
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
      state.emailErrorMessage = getEmailError(state.emailAddress);
    },

    onEmailChange: (state, action: PayloadAction<string>) => {
      state.emailAddress = action.payload.trim();
      state.emailErrorMessage = '';
    },

    onPasswordBlur: (state) => {
      state.passwordErrorMessage = getPasswordError(state.password);
    },

    onPasswordChange: (state, action: PayloadAction<string>) => {
      state.password = action.payload.trim();
      state.passwordErrorMessage = '';
    },

    setValidationErrors: (state, action: PayloadAction<{
      emailErrorMessage: string,
      passwordErrorMessage: string
    }>) => {
      state.emailErrorMessage = action.payload.emailErrorMessage;
      state.passwordErrorMessage = action.payload.passwordErrorMessage;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(handleSubmitLogin.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(handleSubmitLogin.fulfilled, (state, action) => {
        state.isLoading = false;
      })
      .addCase(handleSubmitLogin.rejected, (state, action) => {
        state.isLoading = false;
        if (action.payload?.debugMessage) {
          state.emailErrorMessage = action.payload.debugMessage;
        }
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
  setValidationErrors,
} = modalLoginSlice.actions;

export default modalLoginSlice.reducer;
