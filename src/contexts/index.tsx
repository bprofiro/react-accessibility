import { BrowserRouter as Router } from 'react-router-dom';
import { PropsWithRequiredChildren } from '@common/types';

import { AuthProvider } from './auth';
import { ModalProvider } from './modal';
import { AppThemeProvider } from './theme';
import { TransactionsProvider } from './transactions';

export const AppProviders = ({ children }: PropsWithRequiredChildren) => (
  <AppThemeProvider>
    <Router>
      <AuthProvider>
        <ModalProvider>
          <TransactionsProvider>{children}</TransactionsProvider>
        </ModalProvider>
      </AuthProvider>
    </Router>
  </AppThemeProvider>
);
