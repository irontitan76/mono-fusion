import React from 'react';

import { makeStyles, ThemeProvider } from '@material-ui/styles';
import { Grid, Paper, Zoom } from '@material-ui/core';

import { getTheme } from '../../config/theme.js';

const useStyles = makeStyles(({ breakpoints, palette, spacing }) => {
  return {
    item: {
      [breakpoints.down('sm')]: {
        marginTop: 0,
      },
      marginTop: spacing(18),
    },
    form: {
      backgroundColor: palette.primary.dark,
      height: '100%',
      margin: 'auto',
      paddingBottom: spacing(7),
      paddingTop: spacing(7),
      [breakpoints.down('sm')]: {
        height: '100vh',
      },
    },
  }
});

export function Form({ children }) {
  const classes = useStyles();

  return (
    <Grid container justify='center'>
      <Zoom in>
        <Grid
          className={classes.item}
          item
          md={6} lg={4} xl={3} xs={12}
        >
          <ThemeProvider theme={getTheme('dark')}>
            <Paper
              className={classes.form}
              component={Grid}
              container
              elevation={10}
              justify='center'
            >
              {children}
            </Paper>
          </ThemeProvider>
        </Grid>
      </Zoom>
    </Grid>
  );
}

export default Form;