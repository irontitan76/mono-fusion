import { config, library } from '@fortawesome/fontawesome-svg-core';

import {
  faAnalytics,
  faBinoculars,
  faCalendarAlt,
  faChevronRight,
  faDatabase,
  faFileContract,
  faMoneyCheck,
  faProjectDiagram,
  faUmbrellaBeach,
  faUserPlus,
  faUserTie,
} from '@fortawesome/pro-light-svg-icons';

config.familyPrefix = 'fusion';
config.replacementClass = 'svg-inline--fusion';

library.add(
  faAnalytics,
  faBinoculars,
  faCalendarAlt,
  faChevronRight,
  faDatabase,
  faFileContract,
  faMoneyCheck,
  faProjectDiagram,
  faUmbrellaBeach,
  faUserPlus,
  faUserTie
);
