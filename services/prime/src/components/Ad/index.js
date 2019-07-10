import React, { useState } from 'react';

import { makeStyles } from '@material-ui/styles';
import { Button, Grid, Modal, Paper, TextField, Typography } from '@material-ui/core';

const useStyles = makeStyles(({ breakpoints, palette, spacing }) => {
  return {
    modalField: {
      marginBottom: spacing(3),
    },
    modalPaper: {
      '&:focus': {
        outline: 'none'
      },
      height: 200,
      left: 'calc(100vw - 70%)',
      padding: spacing(3, 4),
      position: 'absolute',
      bottom: 'calc(100vh - 50% - 100px)',
      width: '40%',
      [breakpoints.down('sm')]: {
        left: 'calc(100vw - 90%)',
        width: '80%',
      }
    },
    modalTitle: {
      marginBottom: spacing(2),
    },

    subscribe: {
      background: `linear-gradient(45deg, ${palette.primary.main} 80%, ${palette.primary.dark} 30%)`,
      color: 'white',
      height: 250,
    },
    container: {
      height: '100%',
    },
    item: {
      margin: 'auto',
      textAlign: 'center',
    },
    text: {
      letterSpacing: 2,
      marginBottom: 24,
      textTransform: 'uppercase',
    },
  };
});

export function AdModal({ open, setOpen }) {
  const classes = useStyles();
  open = open || false;

  return (
    <Modal open={open} onClose={() => setOpen(false)}>
      <Paper
        className={classes.modalPaper} 
        component={Grid}
        container
        justify='flex-start'
      >
        <Typography className={classes.modalTitle} variant='h5'>
          Subscribe to our newsletter
        </Typography>
        <TextField
          fullWidth
          className={classes.modalField}
          label='Email'
          placeholder='Type your email'
          type='email'
        />
        <Grid item xs={12}>
          <Grid
            container
            justify='flex-end'
            spacing={2}
          >
            <Grid item xl={2} xs={3}>
              <Button
                color='secondary'
                fullWidth
                onClick={() => setOpen(false)}
                variant='outlined'
              >
                Cancel
              </Button>
            </Grid>
            <Grid item xl={2} xs={3}>
              <Button
                color='primary' 
                fullWidth
                variant='contained'
              >
                Subscribe
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </Modal>
  );
};

export function Ad() {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  return (
    <Paper className={classes.subscribe} elevation={0}>
      <Grid className={classes.container} container>
        <Grid className={classes.item} item xs={12}>
          <Typography
            align='center'
            className={classes.text}
          >
            Subscribe to our insights
          </Typography>
          <Button
            color='secondary'
            onClick={() => setOpen(true)}
            variant='contained'
          >
            Sign up
          </Button>
        </Grid>
        <AdModal open={open} setOpen={setOpen} />
      </Grid>
    </Paper>
  );
};

export default Ad;
