import React from 'react';

import Box from '@fusion/design/lib/_v2/NavSidebar/Box';
import Items from '@fusion/design/lib/_v2/NavSidebar/Items';

import UserIcon from '@material-ui/icons/Person';

export function Home() {
  return (
    <Box>
      <Items items={[
        {
          icon: <UserIcon />,
          label: 'YAY',
        },
        {
          icon: <UserIcon />,
          label: 'WOOT',
        },
        {
          icon: <UserIcon />,
          label: 'HALLO',
        }
      ]} />
    </Box>
  );
}

export default Home;