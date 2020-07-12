import axios from 'axios';
import QuoteConverter from '../../converters/QuoteConverter';

const baseUrl = 'https://www.breakingbadapi.com/api';

const getRandomQuote = () =>
  axios
    .get(`${baseUrl}/quote/random`)
    .then((response) => {
      return QuoteConverter.convert(response.data[0]);
    })
    .catch(() => {
      return null;
    });

const BreakingBadService = {
  getRandomQuote,
};

export default BreakingBadService;
