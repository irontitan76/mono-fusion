import React, { useState } from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

import { makeStyles } from '@material-ui/styles';
import { Button, CircularProgress, Grid, Modal, Paper, TextField, Typography } from '@material-ui/core';

import Markdown from '../../components/Markdown';
import Layout from '../../components/Layout';
import InsightBar from '../../components/InsightBar';
import { Author } from '../../components/InsightItem/Author';

const useStyles = makeStyles(({ palette, spacing }) => {
  return {
    author: {
      marginBottom: spacing(3),
      padding: spacing(3),
    },
    container: {
      marginTop: spacing(1),
    },
    document: {
      height: 'auto',
      padding: spacing(3, 7),
    },
    modal: {
      height: 200,
      left: 'calc(100vw - 50% - 20%)',
      padding: spacing(3, 4),
      position: 'absolute',
      bottom: 'calc(100vh - 50% - 100px)',
      width: '40%',
    },
    modalTitle: {
      marginBottom: spacing(2),
    },
    subscribe: {
      background: `linear-gradient(45deg, ${palette.primary.main} 80%, ${palette.primary.dark} 30%)`,
      color: 'white',
      height: 250,
    },
    subscribeContainer: {
      height: '100%',
    },
    subscribeItem: {
      margin: 'auto',
      textAlign: 'center',
    },
    subscribeText: {
      letterSpacing: 2,
      marginBottom: 24,
      textTransform: 'uppercase',
    },
  };
});

const GET_DOCUMENT = gql`
  query getInsight($_id: ID!) {
    document(where: { _id: $_id }) {
      _id
      author {
        name {
          first
          last
          preferred
        }
        profile {
          avatar
          headline
        }
      }
      title
      content
      media
    }
  }
`;

export function Insight({ match }) {
  const classes = useStyles();
  const [filter, setFilter] = useState({});
  const [open, setOpen] = useState(false);

  const subscription = (
      <Grid
        alignItems='flex-start'
        className={classes.subscribeContainer}
        container
      >
        <Grid className={classes.subscribeItem} item xs={12}>
          <Typography
            align='center'
            className={classes.subscribeText}
          >
            Subscribe to our insights
          </Typography>
          <Button
            color='secondary'
            onClick={() => setOpen(true)}
            variant='contained'
          >
            Sign up
          </Button>
        </Grid>

        <Modal open={open} onClose={() => setOpen(false)}>
          <Paper component={Grid} container className={classes.modal} justify='flex-start'>
            <Typography className={classes.modalTitle} variant='h5'>Subscribe to our newsletter</Typography>
            <TextField
              fullWidth
              label='Email'
              placeholder='Type your email'
              type='email'
            />
            <Grid item xs={12}>
              <Grid container justify='flex-end' spacing={2}>
                <Grid item xs={3}>
                  <Button
                    color='secondary'
                    fullWidth
                    variant='outlined'
                  >
                    Cancel
                  </Button>
                </Grid>
                <Grid item xs={3}>
                  <Button
                    color='primary' 
                    fullWidth
                    variant='contained'
                  >
                    Subscribe
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Paper>
        </Modal>
      </Grid>
  );

  return (
    <Layout>
      <InsightBar filter={filter} setFilter={setFilter} />
      <Query query={GET_DOCUMENT} variables={{ _id: match.params.id }}>
        {({ loading, error, data }) => {
          if (loading) return <CircularProgress />;
          if (error) return null;

          const { author, content, media } = data.document;

          return (
            <Grid className={classes.container} container spacing={8}>
              <Grid item md={8} xs={12}>
                {media ? <img alt='article' height="500" src={media} width="100%" /> : null}
                <Paper className={classes.document} elevation={0}>
                  <Markdown source={content} />
                </Paper>
              </Grid>
              <Grid item md={4}>
                <Paper className={classes.author} elevation={0}>
                  <Author
                    author={author}
                    expand={true}
                    size='lg'
                  />
                </Paper>
                <Paper className={classes.subscribe} elevation={0}>
                  {subscription}
                </Paper>
              </Grid>
            </Grid>
          )
        }}
      </Query>
    </Layout>
  );
}

export default Insight;