import React from 'react';
import {
  BrowserRouter, Route, Switch,
} from 'react-router-dom';


import Login from './pages/Login';
import Produto from './pages/Produto';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Login} />
      <Route path="/product" component={Produto} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
