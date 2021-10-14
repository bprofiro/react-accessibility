import { createContext, PropsWithChildren } from 'react';

import { DialogStateReturn, useDialogState } from 'reakit/Dialog';

interface ModalContextData {
  dialog: DialogStateReturn;
}

export const ModalContext = createContext<ModalContextData>(
  {} as ModalContextData,
);

export const ModalProvider = ({ children }: PropsWithChildren<unknown>) => {
  const dialog = useDialogState();

  return (
    <ModalContext.Provider value={{ dialog }}>{children}</ModalContext.Provider>
  );
};
