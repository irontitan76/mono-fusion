import React from 'react';
import Md from 'react-markdown';

import { makeStyles } from '@material-ui/styles';

export const styles = (palette, spacing) => ({
  '& a': {
    '&:link': {
      color: palette.text.primary,
    },
    '&:visited': {
      color: palette.text.primary,
    },
    color: palette.text.primary,
    cursor: 'pointer',
    textDecoration: 'underline',
  },
  '& blockquote': {
    '& em': {
      fontWeight: 300,
    },
    '& p': {
      fontWeight: 500,
    },
    borderBottom: `2px solid ${palette.primary.main}`,
    borderTop: `2px solid ${palette.primary.main}`,
    fontSize: 14,
    fontWeight: 500,
    marginBottom: spacing(4),
    marginLeft: 0,
    marginRight: 0,
    marginTop: spacing(4),
  },
  '& h1': {
    fontSize: 48,
    fontWeight: 300,
    marginBottom: 0,
    '&::after': {
      backgroundColor: palette.primary.main,
      content: '" "',
      display: 'block',
      height: 5,
      marginBottom: spacing(3),
      width: 45,
    },
  },
  '& h1 + blockquote': {
    border: 'none',
    '& p': {
      fontWeight: 300,
      margin: 0,
      padding: 0,
    },
  },
  '& h2': {
    fontSize: 36,
    fontWeight: 400,
  },
  '& h3': {},
  '& h4': {},
  '& h5': {},
  '& h6': {},
  '& p': {
    '& strong': {
      fontWeight: 500,
    }
  },
});

const useStyles = makeStyles(({ palette, spacing }) => {
  return {
    markdown: styles(palette, spacing),
  };
});

function Markdown({ content }) {
  const classes = useStyles();
  
  return <Md className={classes.markdown} source={content || ''} />;
};

export default Markdown;