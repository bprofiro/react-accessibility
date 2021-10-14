import { useContext } from 'react';

import { AppThemeContext } from '@contexts/theme';

export const useAppTheme = () => {
  const context = useContext(AppThemeContext);

  if (!context) {
    throw new Error(`useAppTheme must be used within an AppThemeProvider`);
  }

  return context;
};
