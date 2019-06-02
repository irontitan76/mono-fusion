import React from 'react';

import { makeStyles } from '@material-ui/styles';
import { Table } from '@material-ui/core';

const useStyles = makeStyles(({ palette, spacing }) => {
  const isDark = palette.type === 'dark';

  return {
    anchor: {
      display: 'block',
      position: 'relative',
      top: -80,
      visibility: 'hidden',
    },
    image: {
      maxHeight: '100%',
      maxWidth: '100%',
    },
    quote: {
      borderBottom: `2px solid ${palette.primary.main}`,
      borderTop: `2px solid ${palette.primary.main}`,
      color: palette.grey[isDark ? 200 : 800],
      fontWeight: 500,
      paddingBottom: spacing(0.25),
      paddingLeft: spacing(1),
      paddingRight: spacing(1),
      paddingTop: spacing(0.25),
      marginBottom: spacing(3),
      marginTop: spacing(3),
    },
  };
});

export function flatten(text, child) {
  return typeof child === 'string'
    ? text + child
    : React.Children.toArray(child.props.children).reduce(flatten, text);
};

export function headingRenderer(props) {
  const classes = useStyles();
  const children = React.Children.toArray(props.children);
  const text = children.reduce(flatten, '');
  const slug = text.toLowerCase().replace(/\W/g, '-');
  return (
    <>
      <a className={classes.anchor} id={slug} />
      {React.createElement('h' + props.level, {}, props.children)}
    </>
  );
};

export function imageRenderer({ src }) {
  const classes = useStyles();
  return <img className={classes.image} src={src} />
};

export function quoteRenderer({ children }) {
  const classes = useStyles();
  return (
    <>
      <div className={classes.quote}>
        {children}
      </div>
    </>
  );
};

export function tableRenderer({ children }){
  return (
    <Table>
      {children}
    </Table>
  );
};