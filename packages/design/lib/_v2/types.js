import PropTypes from 'prop-types';

export const anchors = PropTypes.oneOf(['bottom', 'left', 'right', 'top']);
export const borders = PropTypes.oneOf(['default', 'primary', 'secondary']);
export const colors = PropTypes.oneOf(['default', 'primary', 'secondary', PropTypes.string]);
export const colorVariants = PropTypes.oneOf(['dark', 'light', 'main']);
export const widths = PropTypes.oneOf(['mini', 'xs', 'sm', 'md', 'lg', 'xl', 'xxl', 'full']);