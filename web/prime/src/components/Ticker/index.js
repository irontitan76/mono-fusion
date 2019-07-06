import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { makeStyles } from '@material-ui/styles';

import { ButtonBase, Grid, Typography } from '@material-ui/core';

const useStyles = makeStyles(({ palette, spacing }) => {
  const isDark = palette.type === 'dark';

  return {
    button: {
      backgroundColor: palette.secondary[isDark ? 'dark' : 'dark'],
      color: 'white',
      height: '100%',
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
      padding: spacing(1,2),
      lineHeight: 1.75,
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
      <Grid className={classes.item} item md={2} xs={4}>
        <Grid container wrap='nowrap'>
          <Grid item xs={8}>
            <Typography
              className={classes.title}
            >
              LATEST NEWS
            </Typography>
          </Grid>
          <Grid item onClick={onPrev} xs={2}>
            <ButtonBase className={classes.button}>
              <FontAwesomeIcon icon={['fal', 'chevron-left']} />
            </ButtonBase>
          </Grid>
          <Grid item onClick={onNext} xs={2}>
            <ButtonBase className={classes.button}>
              <FontAwesomeIcon icon={['fal', 'chevron-right']} />
            </ButtonBase>
          </Grid>
        </Grid>
      </Grid>
      <Grid className={classes.message} item md={10} xs={8}>
        <b>{items[visible].title}&nbsp;</b>
        {items[visible].message}
      </Grid>
    </Grid>
  );
}

export default Ticker;