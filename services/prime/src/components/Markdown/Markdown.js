import React from 'react';
import PropTypes from 'prop-types';
import RMD from 'react-markdown';

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import atom from 'react-syntax-highlighter/dist/cjs/styles/prism/atom-dark';
import vs from 'react-syntax-highlighter/dist/cjs/styles/prism';

import { makeStyles, useTheme } from '@material-ui/styles';
import { Toolbar, Typography } from '@material-ui/core';
import { HeadingRenderer, ImageRenderer, QuoteRenderer, TableRenderer } from './renderers';
import { scrollToElement } from '../../config/helpers';

import MarkdownCodebar from './MarkdownCodebar';

const useStyles = makeStyles(({ palette, spacing }) => {
  const isDark = palette.type === 'dark';

  return {
    codeBar: {
      color: palette.grey[700],
      paddingBottom: 0,
      paddingLeft: spacing(1),
      paddingRight: spacing(1),
      paddingTop: spacing(1),
    },
    md: {
      '& pre': {
        ...isDark ? { 
          background: `${palette.background.paper} !important`,
          border: `1px solid ${palette.grey[900]}`,
        } : {},
        borderRadius: '0 !important',
        fontSize: 13,
        marginTop: '0 !important',
        paddingBottom: `${spacing(2)}px !important`,
        paddingLeft: `${spacing(2)}px !important`,
        paddingRight: `${spacing(3)}px !important`,
        paddingTop: `${spacing(2)}px !important`,
      },
      '& h1, h2, h3, h4, h5, h6': {
        fontWeight: 300,
        marginBottom: spacing(4),
        '& strong': {
          fontWeight: 700,
        }
      },
      '& h1': {
        '&::after': {
          backgroundColor: palette.primary.main,
          content: '" "',
          display: 'block',
          height: 5,
          marginBottom: spacing(3),
          width: 45,
        },
        fontSize: 28,
      },
      '& h2': {
        fontSize: 24,
        fontWeight: 500,
      },
      '& h3': {
        fontSize: 20,
        fontWeight: 400,
      },
      '& h4': {
        fontSize: 20,
      },
      '& h5': {
        fontSize: 18,
      },
      '& h6': {
        fontSize: 16,
      },
      '& table': {
        borderCollapse: 'collapse',
        '& th, td': {
          paddingBottom: spacing(1),
          paddingLeft: spacing(.5),
          paddingRight: spacing(3),
          paddingTop: spacing(1),
        },
        '& tr': {
          borderBottom: `1px solid ${isDark ? palette.background.paper : palette.grey[300]}`,
        }
      },
      '& p': {
        fontSize: 15,
      },
      '& strong': {
        fontWeight: 700,
      },
    }
  };
});

export function Markdown({ codeProps, source }) {
  const classes = useStyles();

  scrollToElement();

  function CodeRenderer({ language, value }){
    const { palette } = useTheme();
  
    const title = language && language
      .substring(
        language.indexOf('[') + 1,
        language.indexOf(']')
      )
      .replace('_', ' ');

    return (
      <>
        <Toolbar className={classes.codeBar}>
          <Typography style={{ display: 'flex', flex: 1 }}>
            {title ? title : null}
          </Typography>
          <MarkdownCodebar buttons={codeProps.buttons} value={value} />
        </Toolbar>
        <SyntaxHighlighter
          language={language && language.split('[')[0]}
          style={palette.type === 'dark' ? atom : vs}
        >
          {value}
        </SyntaxHighlighter>
      </>
    );
  };

  return (
    <Typography
      className={classes.md}
      component={RMD}
      renderers={{
        code: CodeRenderer,
        heading: HeadingRenderer,
        image: ImageRenderer,
        blockquote: QuoteRenderer,
        table: TableRenderer
      }}
      source={source.replace(/\\n\\n/g, '\n')}
    />
  );
}

Markdown.defaultProps = {
  codeProps: {},
};

Markdown.propTypes = {
  source: PropTypes.string.isRequired,
};

export default Markdown;