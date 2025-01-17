import React from 'react';

import { makeStyles } from '@material-ui/styles';
import { Grid, Typography } from '@material-ui/core';

const useStyles = makeStyles(({ breakpoints, spacing }) => {
  return {
    container: {
      padding: spacing(1.25, 7),
      [breakpoints.down('sm')]: {
        padding: spacing(1.25, 1),
      },
    },
    quantumDesc: {
      order: 1,
      padding: spacing(4),
      [breakpoints.down('sm')]: {
        order: 2,
      },
    },
    quantumImage: {
      width: '100%',
      order: 2,
      [breakpoints.down('sm')]: {
        order: 1,
      },
    },
    title: {
      fontWeight: 700,
      letterSpacing: 1,
      paddingBottom: spacing(4),
      paddingTop: spacing(5),
      textAlign: 'center',
      textTransform: 'uppercase',
      [breakpoints.down('sm')]: {
        textAlign: 'left',
      },
    }
  };
});

export function Quantum() {
  const classes = useStyles();

  return (
    <Grid className={classes.container} container spacing={4}>
      <Grid item xs={12}>
        <Typography
          className={classes.title}
          variant='h4'
        >
          Quantum
        </Typography>
      </Grid>
      <Grid className={classes.quantumImage} item md={6} xs={12}>
        Test
      </Grid>
      <Grid className={classes.quantumDesc} item md={6} xs={12}>
        <Typography style={{ fontSize: 14 }}>
          Quantum is Fusion's solution to data management and analytics. We pride
          ourselves on quickness, effective process, intuitive experiences, 
          and beautifully designed interfaces. This is Fusion Quantum. 
        </Typography>
      </Grid>
    </Grid>
  );
}

export default Quantum;