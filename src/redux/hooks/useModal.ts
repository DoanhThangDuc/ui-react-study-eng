import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../store';
import { onOpenModal, onCloseModal } from '../slices/modalSlice';

export const useModal = () => {
  const states = useSelector((state: RootState) => state.modal);

  const dispatch = useDispatch<AppDispatch>();
  const openModal = () => dispatch(onOpenModal());
  const closeModal = () => dispatch(onCloseModal());

  return { ...states, openModal, closeModal };
};
