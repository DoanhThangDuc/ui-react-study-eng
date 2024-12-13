import { useSelector } from 'react-redux';
import { RootState } from '../store';

export const useNav = () => {
  return useSelector((state: RootState) => state.nav);
};
