import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/authSlice';
import modalReducer from './slices/modalSlice';
import navReducer from './slices/navSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    modal: modalReducer,
    nav: navReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
