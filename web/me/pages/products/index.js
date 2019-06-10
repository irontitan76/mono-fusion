import React, { useContext } from 'react';
import { compose, Query } from 'react-apollo';
import gql from 'graphql-tag';

import { makeStyles } from '@material-ui/styles';

import Page from '../../layouts/Page';
import { ManifestContext } from '@fusion/design/lib/Provider/Manifest';
import Record from '@fusion/design/lib/_v2/Record/Record';

const useStyles = makeStyles(({ palette, spacing }) => {
  return {
    item: {
      height: 'calc(100vh - 100px)',
      paddingLeft: spacing(5),
      paddingRight: spacing(5),
      paddingTop: spacing(3),
    },
    title: {
      color: palette.grey[700],
      marginBottom: spacing(2),
    },
  };
});

const GET_PRODUCTS = gql`
  query {
    products {
      _id
    }
  }
`

export function People() {
  const manifest = useContext(ManifestContext);
  const { record, slideout, titlebar } = manifest.pages.products;
  const classes = useStyles();

  return (
    <Query query={GET_PRODUCTS}>
      {({ loading, error, data }) => {
        if (error) return null;

        return (
          <Page
            isLoading={loading}
            ItemProps={{ className: classes.item }}
            SlideoutProps={{ children: 'Hello', title: slideout.title }}
            TitleBarProps={{ buttonLabel: titlebar.button, title: titlebar.title }}
          >
            <Record
              data={data.products}
              headers={record.headers}
              paths={record.paths}
            />
          </Page>
        );
      }}
    </Query>
  );
}

export default People;

