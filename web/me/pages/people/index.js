import React, { useContext, useState } from 'react';
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

  function CreatePerson() {
    let formState = {};
    slideout.content.fields.forEach((field) => {
      formState[field.name] = field.value || '';
    });

    const [form, setForm] = useState(formState);

    const contents = slideout.content.fields.map((field) => {
      return (
        <TextField
          className={classes.field}
          InputProps={{ classes: { notchedOutline: classes.outlinedField } }}
          key={field.name}
          margin='dense'
          onChange={(event) => setForm({ ...form, [event.target.name]: event.target.value })}
          {...field}
        />
      );
    });

    return (
      <Mutation mutation={CREATE_PERSON}>
        {(addPerson, { data }) => (
          <form onSubmit={(event) => {
            event.preventDefault();
            console.log(form)
            addPerson({ variables: form });
          }}>
            <Grid container>
              <Grid item xs={12}>
                {contents}
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
    <Query query={GET_PEOPLE}>
      {({ loading, error, data }) => {
        if (error) return null;

        return (
          <Page
            isLoading={loading}
            ItemProps={{ className: classes.item }}
            SlideoutProps={{
              children: <CreatePerson />,
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

