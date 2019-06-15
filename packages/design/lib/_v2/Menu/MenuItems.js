import React from 'react';
import PropTypes from 'prop-types';

import {
  List,
} from '@material-ui/core';

import MenuItem from './MenuItem';
import SSR from '../Ssr/Ssr';

export function MenuItems({ items, withTooltip }) {
  const getItems = items.map((item) => {
    if (!item) return null;
    return <MenuItem key={item.label} {...item} withTooltip={withTooltip} />
  });

  return (
    <SSR>
      <List>
        {getItems}
      </List>
    </SSR>
  )
}

MenuItems.defaultProps = {
  items: [],
  withTooltip: true,
};

MenuItems.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    icon: PropTypes.node,
    label: PropTypes.string.isRequired,
  })),
  withTooltip: PropTypes.bool,
}

export default MenuItems;
