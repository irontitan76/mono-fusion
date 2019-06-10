import React, { useContext } from 'react';
import { Mutation, Query } from 'react-apollo';
import gql from 'graphql-tag';

import { makeStyles } from '@material-ui/styles';
import { Button, Grid, TextField } from '@material-ui/core';

import Page from '../../layouts/Page';
import { ManifestContext } from '@fusion/design/lib/Provider/Manifest';
import Record from '@fusion/design/lib/_v2/Record/Record';


const useStyles = makeStyles(({ palette, spacing }) => {
  return {
    button: {
      position: 'absolute',
      bottom: spacing(3),
      right: spacing(5),
    },
    field: {
      marginBottom: spacing(2),
      '& *': {
        fontSize: 14,
      }
    },
    outlinedField: {
      borderRadius: 0,
    },
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

const GET_DOCUMENTS = gql`
  query {
    documents {
      _id
      author {
        _id
        name {
          first
          last
        }
      }
      category
      content
      title
      type
    }
  }
`

const CREATE_DOCUMENT = gql`
  mutation createDocument($category: String!, $content: String!, $title: String!, $type: String) {
    createDocument(
      category: $category,
      content: $content,
      title: $title,
      type: $type,
    ) {
      category
      content
      title
      type
    }
  }
`;

export function People() {
  const manifest = useContext(ManifestContext);
  const { record, slideout, titlebar } = manifest.pages.documents;
  const classes = useStyles();

  function CreateDocument() {
    const form = slideout.content.fields.map((field) => {
      return (
        <TextField
          className={classes.field}
          InputProps={{
            classes: { notchedOutline: classes.outlinedField },
          }}
          margin='dense'
          {...field}
        />
      );
    });

    return (
      <Mutation mutation={CREATE_DOCUMENT}>
        {(addDocument, { data }) => (
          <form onSubmit={(event) => {
            event.preventDefault();
            addDocument({});
          }}>
            <Grid container>
              <Grid item xs={12}>
                {form}
              </Grid>
            </Grid>
            <Button
              className={classes.button}
              color='primary'
              type='submit'
              variant='contained'
            >
              Add
            </Button>
          </form>
        )}
      </Mutation>
    )
  };

  return (
    <Query query={GET_DOCUMENTS}>
      {({ loading, error, data }) => {
        if (error) return null;

        return (
          <Page
            isLoading={loading}
            ItemProps={{ className: classes.item }}
            SlideoutProps={{
              children: <CreateDocument />,
              title: slideout.title
            }}
            TitleBarProps={{
              buttonLabel: titlebar.button,
              title: titlebar.title
            }}
          >
            <Record
              data={data.documents}
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

