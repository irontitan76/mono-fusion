import React, { useEffect, useState } from 'react';

import SliderItem from './SliderItem';
import SSR from '../Ssr/Ssr';

export function SliderItems({ items }) {
  return items.map((item) => {
    const { icon, label, path: { component, href } } = item;

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