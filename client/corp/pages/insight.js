import React, { useEffect, useState } from 'react';
import SimpleMDE from 'react-simplemde-editor';

import { makeStyles } from '@material-ui/styles';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import { styles as mdStyles } from '@fusion/design/Markdown';

import insightsApi from '@fusion/api/insights';

const useStyles = makeStyles(({ palette, spacing }) => {
  return {
    editor: {
      '& .editor-toolbar': {
        '&.fullscreen': {
          alignItems: 'start',
          boxSizing: 'border-box',
          maxHeight: 'none',
          minHeight: 0,
        },
        '& button': {
          '&.active': {
            borderColor: palette.secondary.main,
          },
          '&:hover': {
            borderColor: palette.primary.main,
          }
        },
        alignItems: 'center',
        borderBottom: `1px solid ${palette.grey[300]}`,
        border: 'none',
        borderRadius: 0,
        boxSizing: 'content-box',
        display: 'flex',
        maxHeight: 64,
        minHeight: 64,
      },
      '& .CodeMirror': {
        '&.CodeMirror-fullscreen': {
          height: 'auto',
          overflowY: 'visible',
          '& .CodeMirror-scroll': {
            padding: spacing(2),
          }
        },
        '& .CodeMirror-scroll': {
          overflow: 'hidden',
          paddingBottom: spacing(3),
          paddingLeft: spacing(5),
          paddingRight: spacing(5),
          paddingTop: spacing(3),
        },
        border: 'none',
        borderBottom: `1px solid ${palette.grey[300]}`,
        borderRadius: 0,
        height: 'calc(100vh - 100px)',
        padding: 0,
        '& .cm-header': {
          color: palette.primary.main,
        }
      },
      '& .editor-preview': {
        paddingBottom: spacing(3),
        paddingLeft: spacing(5),
        paddingRight: spacing(5),
        paddingTop: spacing(3),
        ...mdStyles(palette, spacing),
      },
      '& .editor-preview-side': {
        padding: spacing(2),
        ...mdStyles(palette, spacing),
      }
    },
    input: {
      borderRadius: 0,
      marginBottom: spacing(2),
      '& fieldset': {
        borderRadius: '0 !important',
      },
    },
    sidebar: {
      '& h2': {
        marginBottom: spacing(3),
      },
      borderLeft: `1px solid ${palette.grey[300]}`,
      borderTop: `1px solid ${palette.grey[300]}`,
      height: 'calc(100% - 64px)',
      paddingBottom: spacing(3),
      paddingLeft: spacing(2),
      paddingRight: spacing(2),
      paddingTop: spacing(3),
    },
  };
});

export function Insight({ query }) {
  const classes = useStyles();
  const [insight, setInsight] = useState({});

  useEffect(() => {
    if (Object.keys(insight).length === 0) {
      insightsApi.getOne(query).then((result) => {
        setInsight(result.data.data.insight);
      });
    }

    // return setInsight({});
  });

  const categories = [
    { label: 'Corporate', value: 'corporate' },
  ];

  return (
    <Grid container style={{ maxHeight: '100vh', overflow: 'hidden' }}>
      <Grid item md={8} xs={12}>
        <SimpleMDE
          id='markdown-editor'
          className={classes.editor}
          onChange={() => null}
          value={insight.content}
          options={{
            autofocus: true,
            spellChecker: true,
          }}
        />
      </Grid>
      <Grid
        item
        md={4}
        xs={12}
      >
        <div style={{ height: 64 }} />

        <Grid container className={classes.sidebar} direction='column' justify='space-between'>
          <Grid item>
            <Typography component='h2' variant='h6'>Details</Typography>
            <TextField
              className={classes.input}
              fullWidth
              label='Title'
              placeholder={'Type a title here...'}
              value={insight.title || ''}
              variant='outlined'
            />
            <TextField
              className={classes.input}
              fullWidth
              label='Category'
              select
              value={insight.category || categories[0].value}
              variant='outlined'
            >
              {
                categories.map((category) => (
                  <MenuItem key={category.label} value={category.value}>
                    {category.label}
                  </MenuItem>
                ))
              }
              
            </TextField>
            <TextField
              className={classes.input}
              fullWidth
              label='Description'
              multiline
              placeholder={'Type a description (280 chars)...'}
              rows={3}
              rowsMax={5}
              value={insight.desc || ''}
              variant='outlined'
            />
          </Grid>

          <Grid item>
            <Grid container justify='space-between'>
              <Button color='default' component={Grid} item variant='outlined'>Discard Changes</Button>
              <Button color='primary' component={Grid} item variant='contained'>Update</Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

Insight.getInitialProps = ({ query }) => {
  return { query }
};

export default Insight;