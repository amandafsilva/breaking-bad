import { createUseStyles } from 'react-jss';

const useHeaderStyles = createUseStyles({
  navBar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: '#dadada',
    color: '#272727',
    height: '8rem',
    flexShrink: 0,
  },
  logo: {
    height: 50,
  },
  menu: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  menuButton: {
    fontFamily: 'Roboto',
    backgroundColor: '#dadada',
    border: 'none',
    textTransform: 'uppercase',
    cursor: 'pointer',
    fontSize: '1rem',
    marginLeft: '1rem',
    letterSpacing: '0.13rem',
    transition: 'all 500ms cubic-bezier(0.77, 0, 0.175, 1)',
    userSelect: 'none',
    padding: '0.5rem',
    paddingLeft: '2rem',
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    '&:focus': {
      outline: 'none',
    },
    '&:before, &:after': {
      content: '""',
      position: 'absolute',
      transition: 'inherit',
      top: 0,
      width: 0,
      height: '100%',
    },
    '&:hover, &.active': {
      color: '#ddc831',
      transitionDelay: '.05s',
    },
    '&:hover:before': {
      transitionDelay: '0s',
      width: '100%',
    },
    '&:hover:after, &.active:after': {
      backgroundColor: '#272727',
      transitionDelay: '.35s',
      width: '100%',
    },
    '&:before': {
      left: 0,
      border: '1px solid #272727',
      borderLeft: 0,
      borderRight: 0,
    },
    '&:after': {
      right: 0,
    },
    '& span': {
      zIndex: 1,
    },
  },
});

export default useHeaderStyles;
