import React from 'react';

import { manifest } from '@fusion/client/config/manifest';
import Layout from '@fusion/design/Layout';
import ManifestProvider from '@fusion/design/Provider/Manifest';

export function Home() {
  return (
    <ManifestProvider manifest={manifest}>
      <Layout>
        Hello
      </Layout>
    </ManifestProvider>
  );
};

export default Home;