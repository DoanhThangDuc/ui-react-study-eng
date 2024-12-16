import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../store';
import { onOpenModal, onCloseModal, onBlurInput } from '../slices/modalSlice';

export const useModal = () => {
  const states = useSelector((state: RootState) => state.modal);

  const dispatch = useDispatch<AppDispatch>();
  const openModal = () => dispatch(onOpenModal());
  const closeModal = () => dispatch(onCloseModal());
  const onBlur = () => dispatch(onBlurInput());

  return { ...states, openModal, closeModal, onBlur };
};
