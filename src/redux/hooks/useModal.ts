import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../store';
import * as modalLoginAction from '../slices/modal/modalLoginSlice';
import { bindActionCreators } from '@reduxjs/toolkit';

export const useModal = () => {
  const modalLoginStates = useSelector((state: RootState) => state.modal.modalLogin);

  const dispatch = useDispatch<AppDispatch>();
  const modalLoginActions = bindActionCreators(modalLoginAction, dispatch);

  return { modalLogin: { ...modalLoginStates, ...modalLoginActions } };
};
