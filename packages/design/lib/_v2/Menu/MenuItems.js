import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import {
  List,
} from '@material-ui/core';

import MenuItem from './MenuItem';

export function MenuItems({ items, withTooltip }) {
  const [client, setClient] = useState(null);

  useEffect(() => {
    if (!client && global.window) {
      setClient(true);
    }
  });

  if (!client) return null;


  const getItems = items.map((item) => {
    if (!item) return null;
    return <MenuItem key={item.label} {...item} withTooltip={withTooltip} />
  });

  return (
    <List>
      {getItems}
    </List>
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
