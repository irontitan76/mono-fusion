import React, { useState } from "react";

import { makeStyles } from '@material-ui/styles';
import { Grid, LinearProgress } from '@material-ui/core';
import { Slideout, TitleBar } from '@fusion/design/lib/_v2';

const useStyles = makeStyles(({ spacing }) => {
  return {
    main: {
      paddingLeft: spacing(5),
      paddingRight: spacing(5),
    },
    progress: {
      marginLeft: -50,
      marginRight: -50,
    },
    root: {
      boxSizing: 'border-box',
    },
  };
});

export function Page({ children, isLoading, ItemProps, TitleBarProps, SlideoutProps, ...rest }) {
  const [open, setOpen] = useState(SlideoutProps.open || false);
  const classes = useStyles();

  const onClick = TitleBarProps.onClick || (() => setOpen(true));
  const onClose = SlideoutProps.onClose || (() => setOpen(false));
  
  return (
    <Grid className={classes.root} container {...rest}>
      <TitleBar
        {...TitleBarProps}
        onClick={onClick}
      />
      <Grid
        className={classes.main}
        component='main'
        item
        xs={12}
        {...ItemProps}
      >
        {
          isLoading
            ? <LinearProgress className={classes.progress} />
            : children
        }
        <Slideout
          open={open}
          onClose={onClose}
          {...SlideoutProps}
        />
      </Grid>
    </Grid>
  );
}

Page.defaultProps = {
  SlideoutProps: {},
  TitleBarProps: {},
};

export default Page;