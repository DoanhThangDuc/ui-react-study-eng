'use client';
import { createContext, useContext } from 'react';
import { RootStore } from '../../store/RootStore';

const rootStore = new RootStore();
const StoreContext = createContext(rootStore);

export const StoreProvider = ({ children }: { children: React.ReactNode }) => (
  <StoreContext.Provider value={rootStore}>{children}</StoreContext.Provider>
);

export const useRootStore = () => {
  const store = useContext(StoreContext);
  if (!store) {
    throw new Error('useRootStore must be use in Provider');
  }

  return store;
};
