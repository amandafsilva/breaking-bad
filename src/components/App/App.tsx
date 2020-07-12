import React from 'react';
import AppRouter from './AppRouter';
import useAppStyles from './App.styles';

const App = () => {
  const { root } = useAppStyles();

  return (
    <div className={root}>
      <AppRouter />
    </div>
  );
};

export default App;
