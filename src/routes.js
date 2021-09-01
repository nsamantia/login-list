import { Switch, Route } from 'react-router-dom';
import Login from './Components/Login/Login';
import List from './Components/List/List';

export default (
  <Switch>
    <Route exact path="/" component={Login} />
    <Route Path="/List" component={List} />
  </Switch>
);
