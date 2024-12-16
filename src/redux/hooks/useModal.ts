import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../store';
import * as ModalActions from '../slices/modalSlice';
import { bindActionCreators } from '@reduxjs/toolkit';

export const useModal = () => {
  const states = useSelector((state: RootState) => state.modal);

  const dispatch = useDispatch<AppDispatch>();
  const actions = bindActionCreators(ModalActions, dispatch);

  return { ...states, ...actions };
};
