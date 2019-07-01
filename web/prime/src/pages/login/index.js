import React from 'react';
import { Link as RRLink } from 'react-router-dom';

import { makeStyles, ThemeProvider } from '@material-ui/styles';
import { Button, Grid, Link, Paper, TextField, Typography } from '@material-ui/core';
import { getTheme } from '@fusion/design/lib/theme.js';
import logo from '../../static/images/fusion-logo-white.png';

const useStyles = makeStyles(({ breakpoints, palette, spacing }) => {
  return {
    field: {
      '&:first-child': {
        marginTop: spacing(3),
      },
      '&:last-child': {
        marginBottom: spacing(5),
      },
      marginBottom: spacing(2),
    },
    form: {
      [breakpoints.down('sm')]: {
        marginTop: 0,
      },
      marginTop: spacing(18),
    },
    paper: {
      backgroundColor: palette.primary.dark,
      height: 500,
      margin: 'auto',
      paddingTop: spacing(7),
      [breakpoints.down('sm')]: {
        height: '100vh',
      },
    },
    signupLink: {
      color: palette.grey[500],
      cursor: 'pointer',
    },
    signupText: {
      fontSize: 10,
      marginBottom: spacing(7),
      marginTop: spacing(1),
    },
    title: {
      color: 'white',
      display: 'inline',
      fontWeight: 300,
      letterSpacing: 10,
      marginLeft: 24
    },
  };
});

export function Login() {
  const classes = useStyles();

  return (
    <Grid container justify='center'>
      <Grid className={classes.form} item md={6} lg={4} xl={3} xs={12}>


        <ThemeProvider theme={getTheme('dark')}>
          <Paper
            className={classes.paper}
            component={Grid}
            container
            elevation={10}
            justify='center'
          >
            <Grid item xs={12}>
              <Link component={RRLink} to='/' underline='none'>
                <Grid alignItems='center' container justify='center'>
                  <img alt='logo' src={logo} />
                  <Typography
                    className={classes.title}
                    variant='h3'
                  >
                    FUSION
                  </Typography>
                </Grid>
              </Link>
            </Grid>

            <Typography
              align='center'
              component={Grid}
              item
              variant='subtitle1'
              xs={9}
            >
              <TextField
                className={classes.field}
                fullWidth
                InputProps={{ className: classes.input }}
                InputLabelProps={{ className: classes.inputLabel }}
                label='Username'
                placeholder='Type your username'
                type='username'
              />
              <TextField
                className={classes.field}
                fullWidth
                label='Password'
                placeholder='Type your password'
                type='password'
              />
            </Typography>

            <Grid item xs={9}>
              <Button fullWidth variant='outlined'>Login</Button>
              <Typography className={classes.signupText}>
                Don't have an account?&nbsp;
                <Link
                  className={classes.signupLink}
                  component={RRLink}
                  to='/signup'
                >
                  Sign up
                </Link>
                .
              </Typography>
            </Grid>
          </Paper>
        
        </ThemeProvider>
      </Grid>
    </Grid>
  );
}

export default Login;