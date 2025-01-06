import { createAsyncThunk } from '@reduxjs/toolkit';
import { SignUpPayload } from '../features/authSlice';
import { ErrorMessage, ModalLoginSliceDriver } from '../features/modal/modalLogin/modalLoginSlice';
import { encodePassword } from '../../shared/helpers/encodePassword';
import { RootState } from '..';

export const signUp = createAsyncThunk(
  'auth/signUp',
  async ( payload: SignUpPayload, { rejectWithValue }) => {
    try {
      const response = await fetch('/api/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || 'Sign-in failed');
      }

      return await response.json();
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

export const handleSubmitLogin = createAsyncThunk<void, void,  {state: RootState, rejectValue: ErrorMessage}>(
  'modalLogin/handleSubmitLogin',
  async (_, { getState, rejectWithValue }) => {
    const state = getState() as { modal: {
      modalLogin: ModalLoginSliceDriver
    } };

    const { emailAddress, password } = state.modal.modalLogin;

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_BASE_URL}/v1/auth/signin`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          emailAddress, password: await encodePassword(password)
        }),
      });

      if (!response.ok) {
        return rejectWithValue(await response.json());
      }

      return await response.json();
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);