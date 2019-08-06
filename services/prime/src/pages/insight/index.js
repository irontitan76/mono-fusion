import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

import { makeStyles } from '@material-ui/styles';
import { Grid } from '@material-ui/core';
import { Layout, Loading, InsightBar } from '@fusion/visual';

import Document from './document';
import Sidebar from './sidebar';

const useStyles = makeStyles(({ breakpoints, spacing }) => {
  return {
    container: {
      marginTop: spacing(1),
      [breakpoints.down('sm')]: {
        marginTop: 0,
      },
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
    <>
      <Layout>
        <InsightBar filter={filter} setFilter={setFilter} />
        <Query query={GET_DOCUMENT} variables={{ _id: match.params.id }}>
          {({ loading, error, data }) => {
            if (loading) return <Loading />;
            if (error) return null;

            const { author, content, media } = data.document;

            return (
              <>
                <Helmet>
                  <title>Insights Engine</title>
                  <meta name="description" content={content.substring(1,100)} />
                </Helmet>
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
    </>
  );
}

export default Insight;