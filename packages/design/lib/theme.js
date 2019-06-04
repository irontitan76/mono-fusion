import { createMuiTheme } from '@material-ui/core';

import blue from '@material-ui/core/colors/blue';
import green from '@material-ui/core/colors/green';
import grey from '@material-ui/core/colors/grey';
import red from '@material-ui/core/colors/red';

const type = 'light';

const base = {
  palette: {
    error: {
      contrastText: grey[50],
      dark: red[900],
      light: red[500],
      main: red[700],
    },
    primary: {
      contrastText: grey[50],
      dark: '#0052A2',
      light: blue[500],
      main: blue[700],
    },
    secondary: {
      contrastText: grey[50],
      dark: green[700],
      light: green[300],
      main: green[500],
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

const baseTheme = createMuiTheme(base);

const overrides = {
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
};

export const theme = createMuiTheme({
  ...baseTheme,
  overrides,
});

export const getTheme = (type) => {
  const baseTheme = createMuiTheme({
    ...base,
    palette: {
      ...base.palette,
      type,
    },
  });

  const theme = createMuiTheme({
    ...baseTheme,
    overrides,
  });

  return theme;
};

export default theme;
