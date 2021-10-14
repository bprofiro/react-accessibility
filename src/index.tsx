import { StrictMode } from 'react';

import ReactDOM from 'react-dom';
import { AppProviders } from '@contexts';

import App from './App';

ReactDOM.render(
  <StrictMode>
    <AppProviders>
      <App />
    </AppProviders>
  </StrictMode>,
  document.getElementById('root'),
);
