import { config, library } from '@fortawesome/fontawesome-svg-core';

import {
  faAnalytics,
  faFilter,
  faSearch
} from '@fortawesome/pro-light-svg-icons';

config.autoAddCss = false;

library.add(
  faAnalytics,
  faFilter,
  faSearch
);
