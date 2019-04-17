import React, { useEffect, useState } from 'react';

import { makeStyles } from '@material-ui/styles';

import BannerClose from './BannerClose';
import BannerMessage from './BannerMessage';
import { getCookie } from '../helpers';

const styledBy = (property, mapping) => props => mapping[props[property]];

const useStyles = makeStyles(({ palette }) => {
  const isDark = palette.type === 'dark';
  const borderColor = palette.grey[isDark ? 700 : 'A100'];  
  const bgColor = isDark ? '#2f2f2f' : '#f2f2f2';
  const defaultTextColor = isDark ? '#bbb' : '#555';

  return {
    banner: {
      '& #close-button': {
        color: styledBy('color',
          {
            default: palette.grey[700],
            primary: palette.augmentColor(palette.primary).dark,
            secondary: palette.augmentColor(palette.secondary).dark,
          }
        ),
        '&:hover': {
          color: styledBy('color',
            {
              default: palette.primary.main,
              primary: palette.getContrastText(palette.primary.main),
              secondary: palette.getContrastText(palette.secondary.main),
            }
          ),
        }
      },
      alignItems: 'center',
      backgroundColor: styledBy('color',
        {
          default: bgColor,
          error: palette.error.main,
          primary: palette.primary.main,
          secondary: palette.secondary.main,
        }
      ),
      borderBottom: styledBy('border',
        {
          default: `1px solid ${borderColor}`,
          error: palette.error.main,
          none: 'none',
          primary: `1px solid ${palette.primary.main}`,
          secondary: `1px solid ${palette.secondary.main}`,
        }
      ),
      boxSizing: 'content-box',
      color: styledBy('color',
        {
          default: defaultTextColor,
          primary: palette.getContrastText(palette.primary.main),
          secondary: palette.getContrastText(palette.secondary.main),
        }
      ),
      display: 'flex',
      justifyContent: 'center',
      zIndex: 1200,
    }
  };
})

export default function Banner(props) {
  const classes = useStyles(props);
  const { message, name, persistent } = props;
  const [isClient, setIsClient] = useState(false);
  const [status, setStatus] = useState(getCookie(`user-has-accepted-${name}`) || false);
  
  // Unnecessary double render, SSR error workaround
  useEffect(() => setIsClient(true));

  if (!isClient) return null;

  const banner = persistent ? <BannerClose name={name} onClose={setStatus} /> : null;

  if (status) return null;
  
  return (
    <div className={classes.banner}>
      <BannerMessage message={message} />
      {banner}
    </div>
  );
};

Banner.defaultProps = {
  border: 'default',
  color: 'default',
  persistent: true,
  overrides: {},
};

