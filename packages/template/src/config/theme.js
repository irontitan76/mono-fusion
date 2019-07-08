import { createMuiTheme } from '@material-ui/core';
import blue from '@material-ui/core/colors/blue';
import grey from '@material-ui/core/colors/grey';
import red from '@material-ui/core/colors/red';

const type = 'dark';

export const theme = {
  palette: {
    background: {
      default: '#1d2026',
      paper: '#282c34',
    },
    error: {
      contrastText: grey[50],
      dark: red[900],
      light: red[500],
      main: red[700],
    },
    primary: {
      contrastText: grey[50],
      dark: '#1d2026',
      main: '#282c34',
      light: '#49515f',
    },
    secondary: {
      contrastText: grey[50],
      dark: '#0052A2',
      light: '#2196f3',
      main: blue[900],
    },
    type: type || 'light',
  },
  typography: {
    fontFamily: [
      'Open Sans',
      'Roboto',
      'Helvetica',
      'Arial',
      'sans-serif',
    ]
  }
};

export default createMuiTheme(theme);