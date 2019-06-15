import React, { useContext, useState } from 'react';
import { Mutation, Query } from 'react-apollo';
import gql from 'graphql-tag';

import { makeStyles } from '@material-ui/styles';

import Page from '../../components/Page';
import { ManifestContext } from '@fusion/design/lib/Provider/Manifest';
import { Form, Record } from '@fusion/design/lib/_v2';

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

const GET_PEOPLE = gql`
  query {
    persons {
      _id
      name {
        first
        last
      }
      username
      type
    }
  }
`;

const CREATE_PERSON = gql`
  mutation createPerson(
      $first: String!,
      $last: String!,
      $middle: String!,
      $password: String!
      $preferred: String,
      $username: String!
    ) {
    createPerson(data: {
      name: {
        create: {
          first: $first,
          last: $last,
          middle: $middle,
          preferred: $preferred,
        }
      }
      password: $password,
      username: $username
    }) { _id username }
  }
`;

export function People() {
  const manifest = useContext(ManifestContext);
  const { record, slideout, titlebar } = manifest.pages.people;
  const classes = useStyles();

  const addPersonForm = (
    <Mutation mutation={CREATE_PERSON}>
      {(addPerson) => (
        <Form
          fields={slideout.content.fields}
          onSubmit={addPerson}
        />
      )}
    </Mutation>
  );

  return (
    <Query query={GET_PEOPLE}>
      {({ loading, error, data }) => {
        if (error) return null;

        return (
          <Page
            isLoading={loading}
            ItemProps={{ className: classes.item }}
            SlideoutProps={{
              children: addPersonForm,
              title: slideout.title
            }}
            TitleBarProps={{
              buttonLabel: titlebar.button,
              title: titlebar.title
            }}
          >
            <Record
              data={data.persons}
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

