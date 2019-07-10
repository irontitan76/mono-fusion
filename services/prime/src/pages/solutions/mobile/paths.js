import React, { useState } from 'react';
import clsx from 'clsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { makeStyles } from '@material-ui/styles';
import { Grid, List, ListItem, ListItemText, Typography } from '@material-ui/core';

import { H4, H6 } from '../../../components/Heading';

const useStyles = makeStyles(({ palette, spacing }) => {
  return {
    arrow: {
      fontSize: 120,
    },
    path: {
      color: 'white',
      marginBottom: spacing(4),
      marginTop: spacing(4),
      textAlign: 'center',
    },
    pathInfo: {},
    pathItem: {
      '&:first-of-type': {
        marginTop: spacing(3),
      },
      '&:hover': {
        backgroundColor: palette.primary.main,
      },
      cursor: 'pointer',
      padding: spacing(3),
    },
    container: {
      backgroundColor: '#111',
      color: 'white',
      marginBottom: spacing(3),
      marginTop: spacing(3),
      width: '100%',
    },
    selected: {
      backgroundColor: palette.primary.dark,
    },
  };
});

export function MobilePaths({ paths }) {
  const classes = useStyles();
  const [selected, setSelected] = useState(0);

  const { benefits, desc } = paths[selected];

  const renderPath = (start, end) => (
    paths.slice(start, end).map((path, index) => {
      return (
        <ListItem
          className={clsx(
            classes.pathItem,
            { [classes.selected]: selected === index + start }
          )}
          key={path.name}
          onClick={() => setSelected(index + start)}
        >
          <ListItemText style={{ textAlign: 'center' }}>
            {path.name}
          </ListItemText>
        </ListItem>
      )
    })
  );

  const Path = ({ items, title, invert }) => {
    return (
      <Grid className={classes.path} item xs={2}>
        <H6>{title}</H6>
        <FontAwesomeIcon
          className={classes.arrow}
          flip='horizontal'
          icon={['fal', 'level-down']}
          inverse={invert}
        />
        <List>
          {items}
        </List>
      </Grid>
    );
  };

  const benefitsList = benefits 
    ? (
      <List>
        <ListItem>
          {benefits.map((benefit, index) => {
            return (
              <ListItemText key={index} style={{ textAlign: 'center' }}>
                {benefit}
              </ListItemText>
            );
          })}
        </ListItem>
      </List> 
    ) : null;

  return (
    <Grid
      className={classes.container}
      container
      justify='center'
      spacing={2}
    >
      <Grid item xs={12}>
        <H4>Choose Your Path</H4>
      </Grid>
      <Path items={renderPath(0, 2)} title='Hybrid' />
      <Grid className={classes.pathInfo} item xs={6}>
        <Typography
          align='center'
          style={{ marginTop: '25%' }}
          variant='h6'
        >
          {desc}
        </Typography>
        {benefitsList} 
      </Grid>
      <Path invert items={renderPath(2)} title='Native' />
    </Grid>
  );
}

export default MobilePaths;