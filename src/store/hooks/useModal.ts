import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '..';
import * as modalLoginAction from '../features/modal/modalLogin/modalLoginSlice';
import { bindActionCreators } from '@reduxjs/toolkit';
import { ModalLoginDriver } from '../../components/Modal/ModalLogin/ModalLogin';

export const useModal = (): {
  modalLogin: ModalLoginDriver
} => {
  const modalLoginStates = useSelector((state: RootState) => state.modal.modalLogin);

  const dispatch = useDispatch<AppDispatch>();
  const modalLoginActions = bindActionCreators(modalLoginAction, dispatch);

  return { modalLogin: { ...modalLoginStates, ...modalLoginActions } };
};
