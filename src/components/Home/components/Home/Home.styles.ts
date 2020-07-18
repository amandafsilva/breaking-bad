import { createUseStyles } from 'react-jss';
import homeBackground from '../../../../assets/brba3.png';

const useHomeStyles = createUseStyles({
  '@-webkit-keyframes myfirst': {
    from: { opacity: 0.2 },
    to: { opacity: 1 },
  },
  '@keyframes myfirst': {
    from: { opacity: 0.2 },
    to: { opacity: 1 },
  },
  content: {
    height: '100%',
    backgroundImage: `url(${homeBackground})`,
    backgroundPosition: 'left',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'contain',
    width: '100%',
    padding: '0 5rem',
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'flex-end',
    flexGrow: 1,
    minHeight: 0,
    transition: 'background 300ms ease-in 200ms',
  },
  quoteContainer: {
    width: '50%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    textAlign: 'right',
    paddingRight: '1rem',
    '& h1': {
      margin: '5rem 0 0',
      color: '#272727',
      fontSize: '2.5rem',
      textTransform: 'uppercase',
      '& span': {
        backgroundColor: '#ddc831',
      },
    },
    '& h3': {
      color: '#272727',
      '&:before': {
        content: "'\\2015'",
      },
    },
  },
});

export default useHomeStyles;
