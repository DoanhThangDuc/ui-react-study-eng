'use client';
import { createContext, useContext, useEffect } from 'react';
import { RootPresenter } from '../../presenters/RootPresenter';

const rootPresenter = new RootPresenter();
const PresenterContext = createContext(rootPresenter);

export const PresenterProvider = ({ children }: { children: React.ReactNode }) => {

  useEffect(() => {
    (async () => {
      await rootPresenter.initLoginUser();
    })();
  }, []);

  return (
    <PresenterContext.Provider value={rootPresenter}>{children}</PresenterContext.Provider>
  );
};

export const useRootPresenter = () => {
  const presenter = useContext(PresenterContext);
  if (!presenter) {
    throw new Error('useRootPresenter must be use in Provider');
  }

  return presenter;
};
