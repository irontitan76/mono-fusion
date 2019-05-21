import { createMuiTheme } from '@material-ui/core';

import blue from '@material-ui/core/colors/blue';
import green from '@material-ui/core/colors/green';
import grey from '@material-ui/core/colors/grey';
import red from '@material-ui/core/colors/red';

const baseTheme = createMuiTheme({
  palette: {
    error: {
      contrastText: grey[50],
      dark: red[900],
      light: red[500],
      main: red[700],
    },
    primary: {
      contrastText: grey[50],
      dark: blue[900],
      light: blue[500],
      main: blue[700],
    },
    secondary: {
      contrastText: grey[50],
      dark: green[700],
      light: green[300],
      main: green[500],
    },
    type: 'light',
  },
});

export const theme = createMuiTheme({
  ...baseTheme,
  overrides: {
    MuiAppBar: {
      colorDefault: {
        backgroundColor:
          baseTheme.type === 'dark' ? '#2f2f2f' : baseTheme.palette.background.paper,
        boxShadow: baseTheme.shadows[0],
      },
    },
    MuiButton: {
      root: {
        borderRadius: 0,
      },
    },
    MuiCard: {},
    MuiPaper: {
      rounded: {
        borderRadius: 0,
      },
    },
  },
});

export default theme;
