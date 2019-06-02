import React, { useEffect, useState } from 'react';

export function SSR({ children }) {
  const [client, setClient] = useState(false);

  useEffect(() => {
    if (!client && global.window) {
      setClient(true);
    }
  });

  if (!client) return null;

  return children;
}

export default SSR;