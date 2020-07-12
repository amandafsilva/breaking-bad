import { createUseStyles } from 'react-jss';

const useEpisodesStyles = createUseStyles({
  content: {
    '&.accordion.ui.fluid': {
      backgroundColor: '#272727',
      borderColor: '#272727',
    },
    '&.ui.menu .menuItem.item': {
      color: '#dadada',
      borderBottom: '1px solid rgba(218, 218, 218, 0.3)',
      '&:last-child': {
        borderBottom: 'none',
      },
    },
    '&.ui.styled.accordion .content.active': {
      marginTop: '1.5rem',
      padding: '1rem',
      borderLeft: '2px solid #ddc831',
      backgroundColor: 'rgba(221, 200, 49, 0.1)',
    },
    '&.ui.menu .item .title': {
      color: '#dadada',
    },
    '& .ui.dividing.header': {
      color: '#ddc831',
      borderBottom: '1px solid rgba(218, 218, 218, 0.15)',
      '& .sub.header': {
        color: '#dadada',
      },
    },
  },
});

export default useEpisodesStyles;
