import React, { useContext } from 'react';
import Link from 'next/link';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

import { makeStyles } from '@material-ui/styles';
import { Grid, Typography } from '@material-ui/core';

import { ManifestContext } from '@fusion/design/lib/Provider/Manifest';
import { Carousel } from '@fusion/design/lib/_v2';
import Hero from '@fusion/design/lib/Hero';
import NewsSlider from '@fusion/design/lib/NewsSlider';
import SSR from '@fusion/design/lib/_v2/Ssr/Ssr';

const useStyles = makeStyles(({ palette, spacing }) => {
  return {
    intro: {
      paddingBottom: spacing(9),
      paddingLeft: spacing(2),
      paddingRight: spacing(2),
      paddingTop: spacing(8),
      width: '100%',
    },
    logo: {
      marginBottom: spacing(2),
      paddingBottom: spacing(2),
    },
    subheading: {
      paddingBottom: spacing(4),
    },
    subtitle: {
      fontWeight: 300,
      paddingBottom: spacing(4),
    },
    title: {
      color: palette.text.primary,
      fontSize: '3rem',
      fontWeight: 400,
      letterSpacing: spacing(1.75),
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
  const { company, pages: { home } } = useContext(ManifestContext);
  const classes = useStyles();

  return (
    <SSR>
      <Carousel
        items={[
          <Grid
            alignItems="center"
            className={classes.intro}
            component="center"
            container
            justify="center"
          >
            <Grid item xs={12}>
              <img
                className={classes.logo}
                height={200}
                src={company.logo}
              />
              <Typography
                className={classes.title}
                variant="h1"
              >
                {company.name.toUpperCase()}
              </Typography>
              <Typography
                className={classes.subtitle}
                component="h2"
                variant="h5"
              >
                {company.slogan}
              </Typography>
            </Grid>
          </Grid>
        ]}
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
      {
        home.heros.map((hero) => {
          return (
            <Hero
              component={Link}
              hero={hero}
              key={hero.title}
            />
          );
        })
      }
    </SSR>
  );
}

export default Home;
