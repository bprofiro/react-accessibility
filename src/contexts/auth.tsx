import { createContext, PropsWithChildren, useCallback, useState } from 'react';

import { AxiosResponse } from 'axios';
import { storageKey } from '@utils';
import { api } from '@services/api';

interface UserProps {
  id: string;
  email: string;
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
    const user = localStorage.getItem(storageKey('user'));

    if (token && user) {
      if (api.defaults.headers) {
        api.defaults.headers.authorization = `Bearer ${token}`;
      }

      return { token, user: JSON.parse(user) };
    }

    return {} as AuthState;
  });

  const signIn = useCallback(async (name: string) => {
    const response: AxiosResponse<AuthState> = await api.post('/sessions', {
      name,
    });

    const { token, user } = response.data;

    localStorage.setItem(storageKey('token'), token);
    localStorage.setItem(storageKey('user'), JSON.stringify(user));

    if (api.defaults.headers) {
      api.defaults.headers.authorization = `Bearer ${token}`;
    }

    setData({ token, user });
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
