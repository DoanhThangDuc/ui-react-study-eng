import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';

export const useModal = () => {
  return useSelector((state: RootState) => state.modal);
};
