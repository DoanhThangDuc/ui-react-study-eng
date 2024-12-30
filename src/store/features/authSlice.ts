import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { handleSubmitLogin, signUp } from '../thunks/modalLoginThunks';

export interface AuthDriver {
  emailAddress: string;
  preHashedPassword: string;
  isAuthenticated: boolean;
  user: string | null;
  loading: boolean,
  error: null;
}
export interface SignUpPayload {
  emailAddress: string,
  firstName: string,
  lastName: string,
  preHashedPassword: string
}

export interface SignInPayload {
  emailAddress: string,
  password: string
}

const initialState: AuthDriver = {
  isAuthenticated: false,
  user: null,
  loading: false,
  error: null,
  emailAddress: '',
  preHashedPassword: '',
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(signUp.pending, (state, action) => {
      })
      .addCase(signUp.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(signUp.rejected, (state, action: PayloadAction<any>) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(handleSubmitLogin.pending, (state, action) => {
      })
      .addCase(handleSubmitLogin.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(handleSubmitLogin.rejected, (state, action: PayloadAction<any>) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { } = authSlice.actions;
export default authSlice.reducer;
