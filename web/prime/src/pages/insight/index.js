import React, { useState } from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

import { makeStyles } from '@material-ui/styles';
import { Grid } from '@material-ui/core';

import Layout from 'components/Layout';
import Loading from 'components/Loading';
import InsightBar from 'components/InsightBar';

import Document from './document';
import Sidebar from './sidebar';

const useStyles = makeStyles(({ breakpoints, spacing }) => {
  return {
    container: {
      marginTop: spacing(1),
    },
  };
});

const GET_DOCUMENT = gql`
  query getInsight($_id: ID!) {
    document(where: { _id: $_id }) {
      _id
      author {
        career {
          company
          position
        }
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

  return (
    <Layout>
      <InsightBar filter={filter} setFilter={setFilter} />
      <Query query={GET_DOCUMENT} variables={{ _id: match.params.id }}>
        {({ loading, error, data }) => {
          if (loading) return <Loading />;
          if (error) return null;

          const { author, content, media } = data.document;

          return (
            <>
              <Grid
                className={classes.container}
                container
                spacing={8}
              >
                <Document content={content} media={media} />
                <Sidebar author={author} />
              </Grid>
            </>
          )
        }}
      </Query>
    </Layout>
  );
}

export default Insight;