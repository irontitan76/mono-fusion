import React, { useState } from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

import { makeStyles } from '@material-ui/styles';
import { Button, CircularProgress, Grid, Paper, Typography } from '@material-ui/core';

import Markdown from '../components/Markdown';
import Layout from '../components/Layout';
import InsightBar from '../components/InsightBar';
import { Author } from '../components/InsightItem/Author';

const useStyles = makeStyles(({ palette, spacing }) => {
  console.log(palette);
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
          variant='contained'
        >
          Sign up
        </Button>
      </Grid>
    </Grid>
  );

  return (
    <Layout>
      <InsightBar filter={filter} setFilter={setFilter} />
      <Query query={GET_DOCUMENT} variables={{ _id: match.params.id }}>
        {({ loading, error, data }) => {
          if (loading) return <CircularProgress />;
          if (error) return null;

          return (
            <Grid className={classes.container} container spacing={8}>
              <Grid item md={8} xs={12}>
                <img alt='article' height="500" src={data.document.media} width="100%" />
                <Paper className={classes.document} elevation={0}>
                  <Markdown source={data.document.content} />
                </Paper>
              </Grid>
              <Grid item md={4}>
                <Paper className={classes.author} elevation={0}>
                  <Author
                    author={data.document.author}
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