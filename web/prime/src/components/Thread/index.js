import React, { useState } from 'react';
import clsx from 'clsx';

import { makeStyles } from '@material-ui/styles';
import { Collapse, Grid, Paper, Typography } from '@material-ui/core';

import Author from 'components/Author';

const useStyles = makeStyles(({ palette, spacing }) => {
  return {
    author: {},
    message: {
      '&:hover': {
        backgroundColor: palette.grey[200],
      },
      cursor: 'pointer',
      paddingBottom: spacing(2),
      paddingTop: spacing(2),
    },
    nestedMessage: {
      paddingLeft: spacing(6),
      paddingRight: spacing(6),
    },
    paper: {
      marginTop: spacing(3),
      paddingBottom: spacing(3),
      paddingLeft: spacing(5),
      paddingRight: spacing(5),
      paddingTop: spacing(3),
    },
    text: {
      fontSize: 14,
    },
    textItem: {
      paddingLeft: spacing(8),
      paddingRight: spacing(8),
    },
  };
});

export function Thread() {
  const classes = useStyles();

  const comments = [
    {
      author: {
        name: {
          first: 'Dillon',
          last: 'Sheppard',
          preferred: 'Ross',
        },
        profile: {
          avatar: '/images/profile-1.jpg',
        },
      },
      message: 'This is a message',
      replies: [{
        author: {
          name: {
            first: 'Dillon',
            last: 'Sheppard',
            preferred: 'Ross',
          },
          profile: {
            avatar: '/images/profile-1.jpg',
          },
        },
        message: 'This is a message',
      }],
    },
    {
      author: {
        name: {
          first: 'Dillon',
          last: 'Sheppard',
          preferred: 'Ross',
        },
        profile: {
          avatar: '/images/profile-1.jpg',
        },
      },
      message: 'This is a message',
      replies: [{
        author: {
          name: {
            first: 'Dillon',
            last: 'Sheppard',
            preferred: 'Ross',
          },
          profile: {
            avatar: '/images/profile-1.jpg',
          },
        },
        message: 'This is a message',
      }],
    }
  ]

  const Comment = ({ comment, nested }) => {
    const [open, setOpen] = useState(false);
    return (
      <>
        <Grid
          container
          className={clsx(classes.message, { [classes.nestedMessage]: nested })}
          onClick={() => setOpen(!open)}
        >
          <Grid className={classes.author} item xs={12}>
            <Author author={comment.author} />
          </Grid>
          <Grid className={classes.textItem} item xs={12}>
            <Typography className={classes.text}>{comment.message}</Typography>
          </Grid>
        </Grid>
        <Collapse in={open}>
          {comment.replies ? comment.replies.map((reply, index) => (
              <Comment comment={reply} key={reply.slug || index} nested />
            )) : null}
        </Collapse>
      </>
    );
  }

  return (
    <Paper className={classes.paper} elevation={0}>
      <Typography style={{ fontWeight: 300, padding: 16, paddingBottom: 36 }} variant='h5'>Comments</Typography>
      {comments.map((comment, index) => (
        <Comment comment={comment} key={comment.slug || index} />
      ))}
    </Paper>
  );
}

export default Thread;