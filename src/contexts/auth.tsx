import { createContext, PropsWithChildren, useCallback, useState } from 'react';

import { storageKey } from '@utils';
import { v4 as uuidv4 } from 'uuid';

interface UserProps {
  id: string;
  name: string;
}

interface AuthState {
  token: string;
  user: UserProps;
}

interface AuthContextData {
  user: UserProps;
  signIn: (email: string) => Promise<void>;
  signOut: () => void;
}

export const AuthContext = createContext<AuthContextData>(
  {} as AuthContextData,
);

export function AuthProvider({ children }: PropsWithChildren<unknown>) {
  const [data, setData] = useState<AuthState>(() => {
    const token = localStorage.getItem(storageKey('token'));
    const storedUser = localStorage.getItem(storageKey('user'));

    if (token && storedUser) {
      return { token, user: JSON.parse(storedUser) };
    }

    return {} as AuthState;
  });

  const signIn = useCallback(async (name: string) => {
    const token = uuidv4();
    const user = { id: uuidv4(), name };

    localStorage.setItem(storageKey('token'), token);
    localStorage.setItem(storageKey('user'), JSON.stringify(user));

    setData({ token: uuidv4(), user });
  }, []);

  const signOut = useCallback(() => {
    localStorage.removeItem(storageKey('token'));
    localStorage.removeItem(storageKey('user'));

    setData({} as AuthState);
  }, []);

  return (
    <AuthContext.Provider value={{ signIn, user: data.user, signOut }}>
      {children}
    </AuthContext.Provider>
  );
}
