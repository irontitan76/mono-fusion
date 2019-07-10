import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { makeStyles } from '@material-ui/styles';
import { Avatar, Grid, Typography } from '@material-ui/core';

const getAvatarSize = (size) => {
  switch(size) {
    case 'lg':
      return 64;
    case 'sm':
      return 32;
    default: 
      return 32;
  }
};

const getNameSize = (size) => {
  switch(size) {
    case 'lg':
      return 20;
    case 'sm':
      return 12;
    default: 
      return 16;
  }
};

const getMarginSize = (size, spacing) => {
  switch(size) {
    case 'lg':
      return spacing(3);
    case 'sm':
      return spacing(1);
    default: 
      return spacing(2);
  }
}

const useStyles = makeStyles(({ palette, spacing }) => {
  const isDark = palette.type === 'dark';

  return {
    name: {
      fontSize: ({ size }) => getNameSize(size),
    },
    avatar: {
      backgroundColor: '#f2f2f2',
      color: '#a1a1a1',
      height: ({ size }) => getAvatarSize(size),
      marginLeft: spacing(2),
      marginRight: ({ size }) => getMarginSize(size, spacing),
      width: ({ size }) => getAvatarSize(size),
    },
    headline: {
      color: palette.grey[isDark ? 500 : 700],
      fontSize: ({ size }) => getNameSize(size) * .625,
      paddingLeft: spacing(2),
      paddingTop: spacing(2),
    },
    title: {
      color: palette.primary.main,
      fontSize: ({ size }) => getNameSize(size) * .625,
    }
  };
});

export const getAuthorName = (name) => (
  `${name.preferred || name.first} \n${name.last}`
);

export function Author({ author, className, expand, size }) {
  const classes = useStyles({ size });

  const expandedContent = expand ? (
    <Grid item>
      <Typography className={classes.headline}>
        {author.profile.headline}
      </Typography>
    </Grid>
  ) : null;

  return (
    <Grid alignItems='center' className={className} container>
      <Grid item>
        <Avatar
          className={classes.avatar}
          src={author.profile.avatar}
        >
          <FontAwesomeIcon icon={['fal', 'user']} />
        </Avatar>
      </Grid>
      <Grid item>
        <Typography className={classes.name}>
          {getAuthorName(author.name)}
        </Typography>
        {expand ? (
          <Typography className={classes.title}>
            {author.career.position}
          </Typography>
        ) : null}
      </Grid>
      {expandedContent}
    </Grid>
  );
}

Author.defaultProps = {
  expand: false,
  size: 'md',
};

export default Author;