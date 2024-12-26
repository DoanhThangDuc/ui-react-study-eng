import { useSelector } from 'react-redux';
import { RootState } from '..';

export const useNav = () => {
  return useSelector((state: RootState) => state.nav);
};
