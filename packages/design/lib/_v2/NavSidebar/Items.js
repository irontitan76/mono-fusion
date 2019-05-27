import React from 'react';

import { makeStyles } from '@material-ui/styles';
import { ListItem, ListItemIcon, ListItemText } from '@material-ui/core';

import Icon from './Icon';

const useStyles = makeStyles(() => {
  return {
    item: {},
    text: {
      fontWeight: 300,
    }
  };
});

export function Item(props) {
  const { icon, label } = props;
  const classes = useStyles(props);

  return (
    <ListItem button className={classes.item}>
      <Icon icon={icon} />
      <ListItemText
        primaryTypographyProps={{
          className: classes.text,
        }}
      >
        {label}
      </ListItemText>
    </ListItem>
  );
}

export function Items({ items }) {
  return items.map((item) => <Item key={item.label} {...item} />);
}

export default Items;
