import React from 'react';
import PropTypes from 'prop-types';

import Desktop from './Desktop';
import Mobile from './Mobile';

const Responsive = ({ children }) => (
  <div>
    <Desktop>{children}</Desktop>
    <Mobile>{children}</Mobile>
  </div>
)

Responsive.propTypes = {
  children: PropTypes.node,
}

export default Responsive;