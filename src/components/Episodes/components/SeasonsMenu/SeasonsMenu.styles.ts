import { createUseStyles } from 'react-jss';

const useSeasonsMenuStyles = createUseStyles({
  content: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    paddingRight: '1rem',
    borderRight: '1px solid #272727',
  },
  menu: {
    '&.ui.vertical.tabular.menu': {
      borderColor: '#272727',
    },
    '&.ui.vertical.tabular.menu .active.item': {
      borderColor: '#272727',
      backgroundColor: 'transparent',
      borderRight: '1px solid #dadada',
    },
  },
  menuItem: {
    '&.item': {
      color: '#272727',
      cursor: 'pointer',
      border: 'none',
      padding: '1rem',
      marginBottom: '0.5rem',
    },
  },
});

export default useSeasonsMenuStyles;
