import { config, library } from '@fortawesome/fontawesome-svg-core';

import { faAnalytics, faFilter, faSearch } from '@fortawesome/pro-light-svg-icons';

config.autoAddCss = false;
config.familyPrefix = 'fusion';

library.add(faAnalytics, faFilter, faSearch);
