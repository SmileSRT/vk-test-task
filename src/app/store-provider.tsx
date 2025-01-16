import { createContext, PropsWithChildren, useContext, type FC } from 'react';
import { rootStore, RootStore } from './root-store';

export const StoreContext = createContext<RootStore>({} as RootStore);

export const useStores = (): RootStore => {
  return useContext(StoreContext);
};

export const StoreProvider: FC<PropsWithChildren> = ({ children }) => {
  return (
    <StoreContext.Provider value={rootStore}>{children}</StoreContext.Provider>
  );
};

export default StoreProvider;
