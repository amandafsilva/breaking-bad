import { createUseStyles } from 'react-jss';

const useEpisodesRouteStyles = createUseStyles({
  content: {
    '&.ui.grid': {
      padding: '0 5rem 3rem',
      flexGrow: 1,
      minHeight: 0,
    },
    '& .stretched.twelve.wide.column': {
      height: '100%',
    },
  },
  episodesListContent: {
    '&.ui.segment': {
      color: '#dadada',
      backgroundColor: '#272727',
      borderColor: '#272727',
      height: '100%',
      overflow: 'auto',
    },
  },
});

export default useEpisodesRouteStyles;
