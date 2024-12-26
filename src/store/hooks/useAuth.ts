import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '..';
import { bindActionCreators } from '@reduxjs/toolkit';
import * as authAction from '../features/authSlice';

export const useAuth = () => {
  const authStates = useSelector((state: RootState) => state.auth);
  const dispatch = useDispatch<AppDispatch>();
  const authActions = bindActionCreators(authAction, dispatch);

  return {
    ...authStates,
    ...authActions
  };
};
