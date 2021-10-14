import { Switch } from 'react-router-dom';
import { SignIn } from '@pages/SignIn';
import { Dashboard } from '@pages/Dashboard';

import { Route } from './Route';

export const Routes = () => (
  <Switch>
    <Route path="/" exact component={SignIn} />

    <Route path="/dashboard" component={Dashboard} isPrivate />
  </Switch>
);
