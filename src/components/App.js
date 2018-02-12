import React from 'react';
import { Switch, Route } from 'react-router';
import routes from '../routes';

export default () => (
  <Switch>
    {routes.map((route, idx) => (
      <Route exact key={idx} {...route}/>
    ))}
  </Switch>
);
