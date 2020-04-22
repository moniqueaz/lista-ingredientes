import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import List from './components/pages/List';
import Print from './components/pages/Print';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={List} />
        <Route path="/list" component={List} />
        <Route path="/print" component={Print} />
      </Switch>
    </BrowserRouter>
  );
}
