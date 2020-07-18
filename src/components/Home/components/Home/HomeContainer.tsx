import React from 'react';
import Home from './Home';
import BreakingBadService from '../../../../services/BreakingBad/BreakingBadService';
import { Quote } from '../../../Header/Header.types';

const HomeContainer = () => {
  const [homeQuote, setHomeQuote] = React.useState<Quote | null>(null);

  React.useEffect(() => {
    BreakingBadService.getRandomQuote().then((newQuote) => setHomeQuote(newQuote));
  }, []);

  return homeQuote && <Home quote={homeQuote} />;
};

export default HomeContainer;
