import React from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

import { makeStyles } from '@material-ui/styles';
import { Grid, Typography } from '@material-ui/core';

import InsightItem from 'components/InsightItem';
import Loading from 'components/Loading';

const useStyles = makeStyles(({ palette, spacing }) => {
  return {
    root: {
      backgroundColor: palette.background.paper,
      left: '50%',
      marginLeft: '-50vw',
      marginTop: spacing(8),
      paddingBottom: spacing(3),
      paddingLeft: spacing(5),
      paddingRight: spacing(5),
      position: 'relative',
      width: '100vw',
    },
    container: {
      margin: 'auto',
      maxWidth: 1440,
      width: '100%',
    },
    title: {
      fontWeight: 700,
      paddingBottom: spacing(3),
      paddingTop: spacing(3),
    },
  };
});

const GET_INSIGHTS = gql`
  query {
    documents(first: 3, where: { type: INSIGHT }) {
      _id
      author {
        name {
          first
          last
          preferred
        }
        profile {
          avatar
        }
      }
      description
      media
      meta {
        featured
      }
      subtitle
      title
      type
    }
  }
`;

export function Template() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid
        alignItems='center'
        className={classes.container}
        container
        justify='center'
        spacing={2}
        style={{  }}
      >
        <Grid item xs={12}>
          <Typography
            align='center'
            className={classes.title}
            variant='h4'
          >
            Insights
          </Typography>
        </Grid>

        <Query query={GET_INSIGHTS}>
          {({ loading, error, data }) => {
            if (error) return null;
            if (loading) return <Loading />;

            return data.documents.map((doc) => (
              <InsightItem
                bgColor='default'
                insight={doc}
                key={doc.title}
                size={{ md: 4 }}
              />
            ));
          }}
          </Query>
      </Grid>
    </div>
  );
}

export default Template;