import { QuoteResponse } from '../services/BreakingBad/domains/QuoteResponse';
import { Quote } from '../components/Header/Header.types';

const convert = ({ quote, author }: QuoteResponse): Quote => ({
  text: quote,
  author,
});

const QuoteConverter = {
  convert,
};

export default QuoteConverter;
