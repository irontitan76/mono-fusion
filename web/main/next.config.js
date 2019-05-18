const base = require('@fusion/system/next.config.js');
base.transpileModules.push('@fusion/main');
base.target = 'serverless';

module.exports = base;
