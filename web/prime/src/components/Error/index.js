import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { makeStyles } from '@material-ui/styles';
import { Grid, Typography, ExpansionPanel, ExpansionPanelDetails, ExpansionPanelSummary } from '@material-ui/core';

const useStyles = makeStyles(({ breakpoints, palette, spacing }) => {
  return {
    container: {
      height: '100%',
      marginTop: '5%',
      padding: spacing(3),
      width: '100%',
      [breakpoints.down('sm')]: {
        marginTop: '20%',
        padding: spacing(1),
      },
    },
    panel: {
      border: `1px solid ${palette.secondary.main}`,
      borderRadius: 0,
    },
    pre: {
      whiteSpace: 'pre-wrap',
    },
    status: {
      color: palette.primary.main,
      fontSize: 120,
      fontWeight: 700,
      marginBottom: spacing(5),
      [breakpoints.down('sm')]: {
        fontSize: 80,
      },
    },
  };
});

export function Error({ error }) {
  const classes = useStyles();

  const expandIcon = (
    <FontAwesomeIcon
      icon={['fal', 'chevron-down']}
    />
  );

  return( 
    <Grid
      alignItems='center'
      className={classes.container}
      container
      justify='center'
    >
      <Typography
        align='center'
        className={classes.status}
        component={Grid}
        item
        variant='h2'
        xs={12}
      >
        {error.networkError.statusCode}
      </Typography>
      <Grid item md={5} sm={6} xs={12}>
        <ExpansionPanel
          className={classes.panel}
          elevation={0}
          square={true}
        >
          <ExpansionPanelSummary
            expandIcon={expandIcon}>
            <Typography
              align='center'
              variant='subtitle1'
            >
              Oh no - we encountered an error.
            </Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <pre className={classes.pre}>{error.message}</pre>
          </ExpansionPanelDetails>
        </ExpansionPanel>
      </Grid>
    </Grid>
  );
}

export default Error;