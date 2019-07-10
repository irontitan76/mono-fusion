import React from 'react';
import Draggable from 'react-draggable';

import { makeStyles } from '@material-ui/styles';
import { Grid, Paper, Typography, Zoom } from '@material-ui/core';

import Navbar from '../../components/Navbar';

const useStyles = makeStyles(({ palette, spacing }) => {
  return {
    container: {
      backgroundColor: palette.primary.dark,
      height: '100vh',
    },
    paper: {
      padding: spacing(7, 3),
    },
    title: {
      color: palette.secondary.light,
      fontWeight: 300,
      letterSpacing: 25,
      marginLeft: spacing(2),
    },
  };
});

function App() {
  const classes = useStyles();

  return (
    <>
      <Navbar action='Go back' to='/' />
      <Grid
        alignItems='center'
        className={classes.container}
        container
        justify='center'
      >
        <Draggable>
          <Grid item md={4} sm={6} xs={8} style={{ cursor: 'pointer' }}>
              <Zoom in>
                <Paper className={classes.paper} square>
                  <Typography
                    align='center'
                    className={classes.title}
                    component='h1'
                    variant='h4'
                  >
                    FUSION
                  </Typography>
                </Paper>
              </Zoom>
          </Grid>
        </Draggable>
      </Grid>
    </>
  );
}

export default App;