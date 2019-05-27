import React from 'react';

import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(({ palette }) => {
  const getBackground = (color) => {
    switch(color) {
      case 'primary':
        return palette.primary.main;
      case 'secondary':
        return palette.secondary.main;
      case 'default':
        return palette.background.default;
      default:
        return color;
    }
  };
  
  const getWidth = (width) => {
    switch(width) {
      case 'mini':
        return 64;
      case 'xs':
        return '10%';
      case 'sm':
        return '15%';
      case 'md':
        return '18%';
      case 'lg':
        return '24%';
      case 'xl':
        return '35%';
      case 'full':
        return '100vw';
      default:
        return 'auto';
    }
  };
  
  const getBorder = (anchor, property, border) => {
    // TODO: create Anchor and border logic
    if (anchor !== property) return null;
  
    switch(border) {
      case 'primary':
        return `1px solid ${palette.primary.main}`;
      case 'secondary':
        return `1px solid ${palette.secondary.main}`;
      default:
        return `1px solid ${palette.grey[200]}`;
    }
  }

  return {
    root: {
      alignItems: 'flex-start',
      backgroundColor: ({ color }) => getBackground(color),
      borderBottom: ({ anchor, border }) => getBorder(anchor, 'top', border),
      borderLeft: ({ anchor, border }) => getBorder(anchor, 'right', border),
      borderRight: ({ anchor, border }) => getBorder(anchor, 'left', border),
      borderTop: ({ anchor, border }) => getBorder(anchor, 'bottom', border),
      bottom: props => props.anchor === 'bottom' ? 0 : null,
      color: props => palette.getContrastText(props.color.charAt(0) !== '#' ? palette[props.color].main : '#fff'),
      display: 'flex',
      flexDirection: 'column',
      height: props => props.height,
      justifyContent: 'flex-start',
      left: props => props.anchor === 'left' ? 0 : null,
      position: 'absolute',
      right: props => props.anchor === 'right' ? 0 : null,
      top: props => props.anchor === 'top' ? 0 : null,
      width: ({ width }) => getWidth(width),
    },
  };
});

export function Box(props) {
  const { children } = props;
  const classes = useStyles(props);

  return (
    <div className={classes.root}>
      {children}
    </div>
  );
}

Box.defaultProps = {
  anchor: 'left',
  border: 'default',
  color: 'primary',
  height: '100%',
  width: 'md',
};

export default Box;