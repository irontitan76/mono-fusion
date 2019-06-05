import React, { useState } from "react";

import { makeStyles } from '@material-ui/styles';
import { Grid } from '@material-ui/core';

import Slideout from '@fusion/design/lib/_v2/Slideout/Slideout';
import TitleBar from '@fusion/design/lib/_v2/TitleBar/TitleBar';

const useStyles = makeStyles(({ spacing }) => {
  return {
    main: {
      paddingLeft: spacing(5),
      paddingRight: spacing(5),
    },
    root: {
      boxSizing: 'border-box',
    },
  };
});

export function Page({ children, ItemProps, TitleBarProps, SlideoutProps, ...rest }) {
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
        {children}
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