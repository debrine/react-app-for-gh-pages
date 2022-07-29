import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

export const Router = () => {
  return (
    <Switch>
      <Route path='/react-app-for-gh-pages/'>
        <p>this is the home screen</p>
      </Route>
      <Route path='/test/'>
        <p>test</p>
      </Route>
    </Switch>
  );
};
