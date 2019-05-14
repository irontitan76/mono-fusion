import React from 'react';
import Collapse from '@material-ui/core/Collapse';

import DrawerListItem from './DrawerListItem';

export function DrawerListItems({
  dense,
  isHorizontal,
  isListOpen,
  items,
  LinkComponent,
  router
}) {
  if (!isHorizontal && !isListOpen) return null;

  const DrawerListItems = ({ items }) => {
    let content = items.map((item) => (
      <DrawerListItem
        dense={dense}
        isHorizontal={isHorizontal}
        item={item}
        key={item.name}
        LinkComponent={LinkComponent}
        router={router}
      />
    ));
  
    if (!isHorizontal) {
      return (
        <Collapse in={isListOpen}>
          {content}
        </Collapse>
      );
    }
  
    return content;
  }

  return <DrawerListItems items={items} />;
}

export default DrawerListItems;