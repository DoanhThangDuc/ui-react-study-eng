import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { signup } from '../thunks/authThunks';

export interface AuthDriver {
  isAuthenticated: boolean;
  user: string | null;
  loading: boolean,
  error: null;
}

const initialState: AuthDriver = {
  isAuthenticated: false,
  user: null,
  loading: false,
  error: null
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action: PayloadAction<string>) => {
      // state.isAuthenticated = true;
      // state.user = action.payload;
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.user = null;
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
        // state.isOpen = false;
      })
      .addCase(signup.rejected, (state, action: PayloadAction<any>) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
