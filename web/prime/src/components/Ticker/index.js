import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { makeStyles } from '@material-ui/styles';

import { ButtonBase, Grid, Hidden, Typography } from '@material-ui/core';

const useStyles = makeStyles(({ breakpoints, palette, spacing }) => {
  const isDark = palette.type === 'dark';

  return {
    button: {
      backgroundColor: palette.secondary[isDark ? 'dark' : 'dark'],
      color: 'white',
      height: '100%',
      padding: spacing(2),
      width: '100%',
    },
    container: {
      left: '50%',
      marginLeft: '-50vw',
      position: 'relative',
      width: '100vw',
    },
    item: {
      backgroundColor: palette.primary.main,
    },
    title: {
      color: 'white',
      flex: 1,
      fontWeight: 700,
      padding: spacing(1,2),
    },
    message: {
      backgroundColor: palette.secondary[isDark ? 'main' : 'light'],
      flex: 1,
      padding: spacing(1,2),
      lineHeight: 1.75,
      [breakpoints.down('sm')]: {
        height: 75,
        maxHeight: 100,
        overflow: 'scroll',
      },
    },
  };
});

export function Ticker({ items }) {
  const classes = useStyles();
  const [hover, setHover] = useState(false);
  const [visible, setVisible] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      if (hover) return;
      if (visible === items.length - 1) {
        return setVisible(0);
      }

      return setVisible(visible + 1);
    }, 4000);

    return () => clearInterval(id);
  });

  const onPrev = () => {
    setVisible(visible === 0 ? items.length - 1 : visible - 1);
  }

  const onNext = () => {
    setVisible(visible === items.length - 1 ? 0 : visible + 1);
  }

  return (
    <Grid
      className={classes.container}
      container
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <Grid className={classes.item} item md={2} xs={12}>
        <Typography
          className={classes.title}
        >
          LATEST NEWS
        </Typography>
      </Grid>
      <Hidden smDown>
        <Grid item onClick={onPrev}>
          <ButtonBase className={classes.button}>
            <FontAwesomeIcon icon={['fal', 'chevron-left']} />
          </ButtonBase>
        </Grid>
        <Grid item onClick={onNext}>
          <ButtonBase className={classes.button}>
            <FontAwesomeIcon icon={['fal', 'chevron-right']} />
          </ButtonBase>
        </Grid>
      </Hidden>
      <Grid className={classes.message} item>
        <b>{items[visible].title}&nbsp;</b>
        {items[visible].message}
      </Grid>
    </Grid>
  );
}

export default Ticker;