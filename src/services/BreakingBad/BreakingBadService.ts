import axios from 'axios';
import QuoteConverter from '../../converters/QuoteConverter';
import EpisodesConverter from '../../converters/EpisodesConverter';

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

const getEpisodes = () =>
  axios
    .get(`${baseUrl}/episodes?series=Breaking+Bad`)
    .then((response) => {
      return EpisodesConverter.convert(response.data);
    })
    .catch((error) => {
      throw error;
    });

const BreakingBadService = {
  getRandomQuote,
  getEpisodes,
};

export default BreakingBadService;
