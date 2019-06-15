import React, { useContext } from 'react';
import Link from 'next/link';
import { Mutation, Query } from 'react-apollo';
import gql from 'graphql-tag';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { makeStyles } from '@material-ui/styles';

import Page from '../../components/Page';
import { ManifestContext } from '@fusion/design/lib/Provider/Manifest';
import { Form, Record } from '@fusion/design/lib/_v2';

const useStyles = makeStyles(({ palette, shadows, spacing }) => {
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
    iconButton: {
      '&:first-child': {
        marginRight: spacing(1),
      },
      borderRadius: '50%',
      fontSize: 12,
      padding: spacing(.75)
    },
    item: {
      height: 'calc(100vh - 100px)',
      paddingLeft: spacing(5),
      paddingRight: spacing(5),
      paddingTop: spacing(3),
    },
    paper: {
      backgroundColor: palette.background.paper,
      boxShadow: shadows[5],
      left: 'calc(50% - 200px)',
      outline: 'none',
      padding: spacing(4),
      position: 'absolute',
      top: '40%',
      width: 400,
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
    return (
      <Mutation mutation={CREATE_DOCUMENT}>
        {(addDocument) => (
          <Form
            fields={slideout.content.fields}
            onSubmit={(event) => {
              event.preventDefault();
              addDocument({});
            }}
          />
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
              withControls={{
                edit: {
                  component: Link,
                  href: '/document/edit?id={_id}',
                  icon: <FontAwesomeIcon icon={['fal', 'pencil']} />,
                },
                remove: {
                  icon: <FontAwesomeIcon icon={['fal', 'trash-alt']} />,
                  message: `Are you sure you want to delete this item?`,
                  title: 'Delete item',
                },
              }}
            />
          </Page>
        );
      }}
    </Query>
  );
}

export default People;

