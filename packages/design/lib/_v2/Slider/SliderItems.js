import React, { useEffect, useState } from 'react';

import SliderItem from './SliderItem';

export function SliderItems({ items }) {
  return items.map((item) => {
    const { icon, label, path: { component, href } } = item;

    const [client, setClient] = useState(null);

    useEffect(() => {
      if (!client && global.window) {
        setClient(true);
      }
    });

    if (!client) return null;

    return (
      <SliderItem
        component={component}
        href={href}
        icon={icon}
        key={label}
        label={label}
      />
    );
  });
};

export default SliderItems;