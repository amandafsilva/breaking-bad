import React from 'react';
import AppRouter from './AppRouter';
import useStyles from './App.styles';
import HeaderContainer from '../Header/HeaderContainer';

const App = () => {
  const { root } = useStyles();

  return (
    <div className={root}>
      <HeaderContainer />
      <AppRouter />
    </div>
  );
};

export default App;
