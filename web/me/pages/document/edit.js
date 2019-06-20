import React from 'react';
import { Mutation, Query } from 'react-apollo';
import gql from 'graphql-tag';
import MarkdownEditor from 'react-simplemde-editor';
import { styles as mdStyles } from '@fusion/design/lib/Markdown';

import { makeStyles } from '@material-ui/styles';
import { Grid } from '@material-ui/core';

const useStyles = makeStyles(({ palette, spacing }) => {
  return {
    editor: {
      '& .editor-toolbar': {
        '&.fullscreen': {
          alignItems: 'start',
          boxSizing: 'border-box',
          maxHeight: 'none',
          minHeight: 0,
        },
        '& button': {
          '&.active': {
            backgroundColor: palette.background.paper,
            borderColor: palette.secondary.main,
          },
          '&:hover': {
            backgroundColor: palette.background.paper,
            borderColor: palette.primary.main,
          },
          color: palette.text.primary,
        },
        alignItems: 'center',
        borderBottom: `1px solid ${palette.grey[300]}`,
        border: 'none',
        borderRadius: 0,
        boxSizing: 'content-box',
        display: 'flex',
        maxHeight: 69,
        minHeight: 69,
      },
      '& .CodeMirror': {
        '&.CodeMirror-fullscreen': {
          height: 'auto',
          overflowY: 'visible',
          '& .CodeMirror-sizer': {
            padding: spacing(2),
          },
        },
        '& .CodeMirror-sizer': {
          overflow: 'hidden',
          paddingBottom: spacing(3),
          paddingLeft: spacing(5),
          paddingRight: spacing(5),
          paddingTop: spacing(3),
        },
        backgroundColor: palette.background.default,
        border: 'none',
        borderBottom: `1px solid ${palette.grey[300]}`,
        borderRadius: 0,
        color: palette.text.primary,
        height: 'calc(100vh - 100px)',
        padding: 0,
        '& .cm-header': {
          color: palette.primary.main,
        },
      },
      '& .editor-preview': {
        paddingBottom: spacing(3),
        paddingLeft: spacing(5),
        paddingRight: spacing(5),
        paddingTop: spacing(3),
        ...mdStyles(palette, spacing),
      },
      '& .editor-preview-side': {
        padding: spacing(2),
        ...mdStyles(palette, spacing),
      },
    },
  };
});

const GET_DOCUMENT = gql`
  query getDocument($_id: ID!) {
    document(where: { _id: $_id}) {
      _id
      content
      title
    }
  }
`;

const UPDATE_DOCUMENT = gql`
  mutation updateDocument($_id: ID!, $content: String!) {
    updateDocument(where: { _id: $_id }, data: { content: $content }) {
      _id
      content
    }
  }
`;

export function DocumentEdit({ query }) {
  const classes = useStyles();

  return (
    <Query query={GET_DOCUMENT} variables={{ _id: query.id }}>
      {({ loading, error, data }) => {
        if ( loading || error ) return null;
        
        return (
          <Grid container style={{ maxHeight: '100vh', overflow: 'hidden' }}>
            <Grid item xs={12}>
              <Mutation mutation={UPDATE_DOCUMENT}>
                {(updateDocument) => {
                  return (
                    <MarkdownEditor
                      className={classes.editor}
                      id='mde'
                      onChange={(value) => updateDocument({ variables: { _id: data.document._id, content: value }})}
                      options={{
                        autofocus: true,
                        spellChecker: true,
                      }}
                      value={data.document && data.document.content}
                    />
                  )
                }}
              </Mutation>
            </Grid>
          </Grid>
        );
      }}
    </Query>
  );
}

DocumentEdit.getInitialProps = ({ query }) => {
  return { query };
};

export default DocumentEdit;