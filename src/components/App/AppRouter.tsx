import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import HomeContainer from '../Home/HomeContainer';

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={HomeContainer} />
      </Switch>
    </BrowserRouter>
  );
};

export default AppRouter;
