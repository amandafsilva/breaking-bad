import React from 'react';
import useHomeStyles from './Home.styles';
import { Quote } from '../Header/Header.types';

interface HomeProps {
  quote: Quote;
}

const Home = ({ quote }: HomeProps) => {
  const classes = useHomeStyles();

  return (
    <div className={classes.content}>
      <div className={classes.quoteContainer}>
        <h1>
          <span>“{quote.text}”</span>
        </h1>
        <h3>{quote.author}</h3>
      </div>
    </div>
  );
};

export default Home;
