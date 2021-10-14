import { createContext } from 'react';

import { PropsWithRequiredChildren } from '@common/types';
import { GlobalStyle, theme } from '@styles';
import { ThemeProvider } from 'styled-components';

import { usePersistedState } from '../hooks';

export type ThemeState = 'light' | 'dark';

type AppThemeContextData = {
  currentTheme: ThemeState;
  toggleTheme(): void;
};

export const AppThemeContext = createContext<AppThemeContextData>(
  {} as AppThemeContextData,
);

export const AppThemeProvider = ({ children }: PropsWithRequiredChildren) => {
  const [currentTheme, setCurrentTheme] = usePersistedState<ThemeState>(
    'theme',
    'light',
  );

  const toggleTheme = () => {
    setCurrentTheme(prevState => (prevState === 'dark' ? 'light' : 'dark'));
  };

  return (
    <ThemeProvider theme={theme[currentTheme]}>
      <AppThemeContext.Provider value={{ currentTheme, toggleTheme }}>
        {children}
      </AppThemeContext.Provider>
      <GlobalStyle />
    </ThemeProvider>
  );
};
