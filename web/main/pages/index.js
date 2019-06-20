import React, { useContext } from 'react';
import Link from 'next/link';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

import { makeStyles } from '@material-ui/styles';
import { Typography } from '@material-ui/core';

import { ManifestContext } from '@fusion/design/lib/Provider/Manifest';
import Hero from '@fusion/design/lib/Hero';
import Intro from '@fusion/design/lib/Intro';
import NewsSlider from '@fusion/design/lib/NewsSlider';
import SSR from '@fusion/design/lib/_v2/Ssr/Ssr';

const useStyles = makeStyles(({ spacing }) => {
  return {
    subheading: {
      paddingBottom: spacing(4),
    },
  };
});

const GET_INSIGHTS_BY_CATEGORY = gql`
  query {
    documents(where: { category: CORPORATE, type: INSIGHT, meta: { featured: true } }) {
      _id
      description
      media
      meta {
        featured
      }
      title
    }
  }
`;

export function Home() {
  const manifest = useContext(ManifestContext);
  const classes = useStyles();

  return (
    <SSR>
      <Intro
        logo={manifest.company.logo}
        slogan={manifest.company.slogan}
        title={manifest.company.name}
      />

      <Typography align="center" className={classes.subheading} variant="h5">
        Company News
      </Typography>

      <Query query={GET_INSIGHTS_BY_CATEGORY}>
        {({ loading, error, data }) => {
          if (loading) return null;
          if (error) return null;
          
          return (
            <NewsSlider
              component={Link}
              insights={data.documents || []}
              rounded={true}
              scroll={true}
              spacing={4}
            />
          );
        }}
      </Query>

      {manifest.pages.home.heros.map((hero) => {
        return <Hero component={Link} hero={hero} key={hero.title} />;
      })}
    </SSR>
  );
}

export default Home;
