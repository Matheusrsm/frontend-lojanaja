import React from 'react';
import {
  BrowserRouter, Route, Switch, Redirect, useLocation,
} from 'react-router-dom';


import isLogged from './middlewares/auth';

import Login from './pages/Login';
import Produto from './pages/Produto';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const location = useLocation();

  return (
    <Route
      {...rest}
      render={(props) => (
        isLogged()
          ? <Component {...props} />
          : <Redirect to={{ pathname: '/login', state: { from: location.pathname } }} />
      )}
    />
  );
};

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={() => <Redirect to="/login" />} />
      <Route path="/login" component={Login} />
      <PrivateRoute exact path="/product" component={Produto} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
