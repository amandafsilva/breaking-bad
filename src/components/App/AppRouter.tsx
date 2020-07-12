import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HeaderContainer from '../Header/HeaderContainer';
import HomeRoute from '../Home/HomeRoute';
import EpisodesRoute from '../Episodes/EpisodesRoute';
import CharactersRoute from '../Characters/CharactersRoute';

const AppRouter = () => {
  return (
    <Router>
      <HeaderContainer />
      <Switch>
        <Route path="/" exact component={HomeRoute} />
        <Route path="/episodes" component={EpisodesRoute} />
        <Route path="/characters" component={CharactersRoute} />
      </Switch>
    </Router>
  );
};

export default AppRouter;
