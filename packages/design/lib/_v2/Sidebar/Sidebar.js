import React from 'react';

import { makeStyles } from '@material-ui/styles';
import {
  Drawer,
  Hidden
} from '@material-ui/core';

import { shade, trace, stretch } from '../helpers';
import { anchors, borders } from '../types';

const useStyles = makeStyles(({ palette }) => {
  return {
    paper: {
      backgroundColor: ({ color, variant }) => shade(palette, color, variant),
      borderBottom: ({ anchor, border }) => trace(palette, anchor, 'top', border),
      borderLeft: ({ anchor, border }) => trace(palette, anchor, 'right', border),
      borderRight: ({ anchor, border }) => trace(palette, anchor, 'left', border),
      borderTop: ({ anchor, border }) => trace(palette, anchor, 'bottom', border),
      bottom: props => props.anchor === 'bottom' ? 0 : null,
      color: ({ color }) => {
        if (color.charAt() === '#') {
          return palette.getContrastText(color);
        } else if (color === 'default') {
          return palette.getContrastText(palette.background.default);
        } else {
          return palette.getContrastText(palette[color].main);
        }
      },
      width: ({ width }) => stretch(width),
    },
  };
});

export function Sidebar(props) {
  const { children, open } = props;
  const classes = useStyles(props);

  return (
    <nav>
      <Hidden smUp implementation="css">
        <Drawer
          anchor="left"
          classes={{ paper: classes.paper }}
          style={{ width: 240 }}
          open={open}
          ModalProps={{ keepMounted: true }}
          variant="temporary"
        >
          {children}
        </Drawer>
      </Hidden>
      <Hidden xsDown implementation="css">
        <Drawer
          classes={{ paper: classes.paper }}
          variant="permanent"
        >
          {children}
        </Drawer>
      </Hidden>
    </nav>
  );
}

Sidebar.defaultProps = {
  anchor: 'left',
  border: 'default',
  color: 'primary',
  height: '100%',
  variant: 'main',
  width: 'mini',
};

Sidebar.propTypes = {
  anchor: anchors,
  border: borders,
};

export default Sidebar;