import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';

export const useNav = () => {
  return useSelector((state: RootState) => state.nav);
};
