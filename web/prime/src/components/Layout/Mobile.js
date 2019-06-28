import React from 'react';

import { Hidden } from '@material-ui/core';

import MobileMenu from './MobileMenu';

export function Mobile({ items }) {

  return (
    <Hidden mdUp>
      <MobileMenu items={items} />
    </Hidden>
  );
}

export default Mobile;