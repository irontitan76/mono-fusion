import React from 'react';
import clsx from 'clsx';

import { makeStyles } from '@material-ui/styles';
import { Card, CardContent, CardMedia, Typography } from '@material-ui/core';

const useStyles = makeStyles(({ palette, spacing }) => {
  return {
    card: {
      '&:hover': {
        borderColor: palette.secondary.light,
      },
      border: '5px solid transparent',
    },
    cardSelected: {
      '&:hover': {
        borderColor: palette.primary.main,
      },
      borderColor: palette.primary.main,
    },
    category: {
      color: palette.grey[600],
      fontSize: 14,
      textTransform: 'uppercase',
    },
    content: {
      '&:last-child': {
        paddingBottom: spacing(3),
        paddingTop: spacing(3),
      },
    },
    name: {
      fontSize: 18,
      fontWeight: 700,
    },
  };
});

export function SolutionItem({ category, media, name, selected }) {
  const classes = useStyles();

  return (
    <Card
      className={clsx(
        classes.card,
        { [classes.cardSelected]: selected }
      )}
      elevation={0}
    >
      <CardMedia
        image={media}
        style={{ height: 0, paddingTop: '56.25%' }}
      />
      <CardContent className={classes.content}>
        <Typography
          align='center'
          className={classes.category}
        >
          {category}
        </Typography>
        <Typography
          align='center'
          className={classes.name}
        >
          {name}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default SolutionItem;