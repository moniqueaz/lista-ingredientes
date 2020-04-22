import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Search from './components/pages/Search';
import Main from './components/pages/Main';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Search} />
        <Route path="/list" component={Main} />
      </Switch>
    </BrowserRouter>
  );
}
