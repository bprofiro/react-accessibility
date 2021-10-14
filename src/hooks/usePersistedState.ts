import { useState, useEffect, Dispatch, SetStateAction } from 'react';

import { storageKey } from '@utils';

type Response<T> = [T, Dispatch<SetStateAction<T>>];

export function usePersistedState<T>(
  key: string,
  initialState: T,
): Response<T> {
  const [state, setState] = useState<T>(() => {
    const storageValue = localStorage.getItem(storageKey(key));

    if (storageValue) {
      return JSON.parse(storageValue);
    }
    return initialState;
  });

  useEffect(() => {
    localStorage.setItem(storageKey(key), JSON.stringify(state));
  }, [key, state]);

  return [state, setState];
}
