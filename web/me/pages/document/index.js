import React, { useContext } from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import Link from 'next/link';

import { ManifestContext } from '@fusion/design/lib/Provider/Manifest';
import Contents from '@fusion/design/lib/_v2/Contents/Contents';
import Markdown from '@fusion/design/lib/_v2/Markdown/Markdown';
import Split from '@fusion/design/lib/_v2/Split/Split';

import Page from '../../layouts/Page';

const GET_DOCUMENTS = gql`
  query {
      documents {
      _id
      content
      title
    }
  }
`;

// const UPDATE_DOCUMENT = gql`
//   mutation {
//     document()
//   }
// `;

export function Documents() {
  const manifest = useContext(ManifestContext);
  const { contents, slideout, titlebar } = manifest.pages.documents;
  const { buttons } = manifest.pages.documents.markdownCodebar;
  
  return (
    <Query query={GET_DOCUMENTS}>
      {({ loading, error, data }) => {
        if (error) return null;

        const content = data.documents ? data.documents[0].content : '';

        return (
          <Page
            isLoading={loading}
            SlideoutProps={{
              title: slideout.title
            }}
            TitleBarProps={{
              buttonLabel: titlebar.button,
              title: titlebar.title
            }}
          >
            <Split>
              <Markdown
                codeProps={{ buttons }}
                source={content}
              />
              <Contents
                as="toc"
                component={Link}
                source={content}
                title={contents.title}
              />
            </Split>
          </Page>
        );
      }}
    </Query>
  );
}

export default Documents;