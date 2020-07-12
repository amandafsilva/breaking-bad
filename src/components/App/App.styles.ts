import { createUseStyles } from 'react-jss';

const useAppStyles = createUseStyles({
  root: {
    height: '100vh',
    width: '100vw',
    fontFamily: 'Roboto',
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#dadada',
  },
});

export default useAppStyles;
