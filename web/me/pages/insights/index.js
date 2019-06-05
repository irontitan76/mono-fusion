import React, { useContext } from 'react';
import Link from 'next/link';

import { ManifestContext } from '@fusion/design/lib/Provider/Manifest';
import Contents from '@fusion/design/lib/_v2/Contents/Contents';
import Markdown from '@fusion/design/lib/_v2/Markdown/Markdown';
import Split from '@fusion/design/lib/_v2/Split/Split';

import standards from '../../static/markdown/FusionStandard.md';
import Page from '../../layouts/Page';

export function Insights() {
  const manifest = useContext(ManifestContext);
  const { contents, slideout, titlebar } = manifest.pages.insights;
  const { buttons } = manifest.pages.insights.markdownCodebar;
  
  return (
    <Page
      SlideoutProps={{ title: slideout.title }}
      TitleBarProps={{ buttonLabel: titlebar.button, title: titlebar.title }}
    >
      <Split>
        <Markdown
          codeProps={{ buttons }}
          source={standards}
        />
        <Contents
          as="toc"
          component={Link}
          source={standards}
          title={contents.title}
        />
      </Split>
    </Page>
  );
}

export default Insights;