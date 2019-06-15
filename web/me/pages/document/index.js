import React, { useContext } from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import Link from 'next/link';

import { ManifestContext } from '@fusion/design/lib/Provider/Manifest';
import { Contents, Markdown, Split } from '@fusion/design/lib/_v2';

import Page from '../../components/Page';

const GET_DOCUMENT = gql`
  query  getDocument($title: String!) {
    document(where: { title: $title }) {
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

export function Document({ query }) {
  const manifest = useContext(ManifestContext);
  const { contents, slideout, titlebar } = manifest.pages.document;
  const { buttons } = manifest.pages.document.markdownCodebar;
console.log('q', query);
  return (
    <Query query={GET_DOCUMENT} variables={{ title: query.title }}>
      {({ loading, error, data }) => {
        if (error) return null;
        console.log(data);
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
                source={data.document && data.document.content || ''}
              />
              <Contents
                as="toc"
                component={Link}
                source={data.document && data.document.content || ''}
                title={contents.title}
              />
            </Split>
          </Page>
        );
      }}
    </Query>
  );
}

Document.getInitialProps = ({ query }) => {
  return { query };
};

export default Document;