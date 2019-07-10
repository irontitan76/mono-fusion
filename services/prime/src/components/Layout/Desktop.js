import React from 'react';

import { Hidden } from '@material-ui/core';

import DesktopMenu from './DesktopMenu';
import DesktopSearch from './DesktopSearch';

export function Desktop({ items }) {
  return (
    <Hidden smDown>
      <DesktopMenu items={items} />
      <DesktopSearch />
    </Hidden>
  );
}

export default Desktop;