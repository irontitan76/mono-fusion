import React, { useEffect, useState } from 'react';
import clsx from 'clsx';

import { makeStyles } from '@material-ui/styles';
import { Grid } from '@material-ui/core';

const useStyles = makeStyles(({ palette, shadows, spacing }) => {
  return {
    container: {
      '& > div': {
        '&:last-of-type': {
          marginBottom: 0,
        },
        height: '100%',
        marginBottom: spacing(4),
        paddingLeft: spacing(2),
        paddingRight: spacing(2),
      },
      height: '100%',
      marginBottom: -30,
      overflow: 'scroll',
      position: 'relative',
      top: -15,
      width: '100%',
    },
    slider: {
      display: 'flex',
      flexDirection: 'column',
      height: ({ height }) => height,
      overflow: 'hidden',
      width: '100%',
    },
    shadow: {
      boxShadow: '0 8px 14px -4px rgba(0,0,0,1)',
    },
    shadowBox: {
      backgroundColor: palette.background.default,
      height: 15,
      left: 15,
      position: 'relative',
      width: `calc(100% - ${spacing(3)}px)`,
      zIndex: 3,
    },
    shadowBottom: {
      bottom: -15,
      transform: 'rotate(180deg)',
    },
    shadowTop: {
      top: -15,
    },
  };
});

export function Slider({ children, height }) {
  const classes = useStyles({ children, height });
  const [scrollBottom, setScrollBottom] = useState(false);
  const [scrollTop, setScrollTop] = useState(false);

  useEffect(() => {
    document.getElementById('container').addEventListener('scroll', (event) => {
      const { clientHeight, scrollHeight, scrollTop } = event.target;
        setScrollTop(scrollTop !== 0);
        setScrollBottom(scrollHeight - (clientHeight + scrollTop) > 0);
      });
  });

  return (
    <div className={classes.slider}>
      <div className={clsx(
        { [classes.shadow]: scrollTop },
        classes.shadowBox,
        classes.shadowTop)}
      />
      <Grid
        container
        className={classes.container}
        direction='column'
        id='container'
        wrap='nowrap'
      >
        {children}
      </Grid>
      <div className={clsx(
        { [classes.shadow]: scrollBottom },
        classes.shadowBox,
        classes.shadowBottom)}
      />
    </div>
  );
}

export default Slider;