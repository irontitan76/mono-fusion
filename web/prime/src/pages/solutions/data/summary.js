import React from 'react';

import { makeStyles } from '@material-ui/styles';
import { Grid, Typography } from '@material-ui/core';

const useStyles = makeStyles(({ breakpoints, palette, spacing }) => {
  return {
    container: {
      padding: spacing(1.25, 7),
      [breakpoints.down('sm')]: {
        padding: spacing(1.25, 1),
      },
    },
    description: {
      marginBottom: spacing(6),
      textAlign: 'center',
      [breakpoints.down('sm')]: {
        textAlign: 'left',
      }
    },
    title: {
      '&::after': {
        backgroundColor: palette.primary.main,
        content: '""',
        display: 'block',
        height: 5,
        marginTop: spacing(2),
        margin: 'auto',
        width: 60,
        [breakpoints.down('sm')]: {
          margin: 'initial',
          marginTop: spacing(1),
        }
      },
      fontWeight: 700,
      letterSpacing: 1,
      paddingBottom: spacing(4),
      paddingTop: spacing(7),
      textAlign: 'center',
      textTransform: 'uppercase',
      [breakpoints.down('sm')]: {
        textAlign: 'left',
      }
    }
  };
});

export function DataSummary() {
  const classes = useStyles();

  return (
    <Grid
      className={classes.container}
      container
    >
      <Grid item xs={12}>
        <Typography
          className={classes.title}
          variant='h4'
        >
          Efficiently structure your data
        </Typography>
        <Typography
          className={classes.description}
          variant='subtitle1'
        >
          Process optimization begins with enhancing the way
          a business stores information and handles data. At 
          Fusion, our data solutions ensure that your 
          company's data is stored securely
          while reducing costs, increasing performance, and 
          maintaining operational viability. Fusion Quantum
          brings your organization into the modern
          age with GraphQL schemas, Prisma services,
          and NoSQL databases. Fuse Quantum with 
          Fusion Template's Apollo functionality to give your
          business an even larger edge.
        </Typography>
      </Grid>
    </Grid>
  );
}

export default DataSummary;