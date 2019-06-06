// Text color options
export const colorize = (palette, color, variant) => {
  switch(color) {
    case 'primary':
    case 'secondary': 
      return palette[color][variant];
    case 'default':
      return palette.common.white;
    default:
      return color;
  }
};

export function scrollToElement() {
  const element = global.document && document.getElementById(window.location.hash.substring(1));
  element && element.scrollIntoView(element);
};

// Background options
export const shade = (palette, color, variant) => {
  switch(color) {
    case 'primary':
      return palette.primary[variant];
    case 'secondary':
      return palette.secondary[variant];
    case 'default':
      return palette.background.default;
    default:
      return color;
  }
};

// Width options
export const stretch = (width) => {
  switch(width) {
    case 'mini':
      return 64;
    case 'xs':
      return 160;
    case 'sm':
      return 200;
    case 'md':
      return 240;
    case 'lg':
      return 300;
    case 'xl':
      return 350;      
    case 'xxl':
      return 400;
    case 'full':
      return '100vw';
    default:
      return 'auto';
  }
};

// Border options
export const trace = (palette, anchor, property, border) => {
  // TODO: create Anchor and border logic
  if (anchor !== property) return null;
  const isDark = palette.type === 'dark';

  switch(border) {
    case 'primary':
      return `1px solid ${palette.primary.main}`;
    case 'secondary':
      return `1px solid ${palette.secondary.main}`;
    default:
      return `1px solid ${palette.grey[isDark ? 800 : 200]}`;
  }
};
